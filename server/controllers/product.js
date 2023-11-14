const {
  sequelize,
  Sequelize,
  Product,
  ProductImage,
  ProductProperties,
  CategoryProperties,
} = require("../models/index");
const { Op } = require("sequelize");
const productController = {
  getProducts: async (req, res, next) => {
    try {
      const { pageIndex, pageSize, category, name } = req.query;
      if (!pageIndex || !pageSize) {
        res.status(400).json({ message: "Bad request!" });
      }
      const limit = parseInt(pageSize) || 10;
      const page = parseInt(pageIndex) || 1;
      const offset = (page - 1) * limit;
      const whereCondition = {
        title: {
          [Op.like]: `${name}%`,
        },
      };
      if (category !== "all") {
        whereCondition.categoryId = category;
      }
      const products = await Product.findAndCountAll({
        limit: limit,
        offset: offset,
        where: whereCondition,
        include: [
          {
            model: ProductImage,
            attributes: {
              exclude: ["id", "createdAt", "updatedAt", "productId"],
            },
            as: "images",
            limit: 1,
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log({ products });

      const modifiedProducts = products.rows.map(product => {
        const image = product.images[0] ? product.images[0].image : null;
        return {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          rating: product.rating,
          categoryId: product.categoryId,
          image,
        };
      });
      const totalCount = products.count;
      const totalPages = Math.ceil(totalCount / limit);
      res.status(200).json({
        pageIndex: page,
        pageSize: limit,
        totalCount: totalCount,
        totalPages: totalPages,
        products: modifiedProducts,
      });
    } catch (err) {
      console.log({ err });
      res.status(500).send({ message: "Internal Server Error", error: err });
    }
  },
  getProductDetail: async (req, res, next) => {
    try {
      const { productId } = req.query;
      if (!productId) {
        res.status(400).json({ message: "Bad request!" });
      }
      const product = await Product.findOne({
        where: {
          id: productId,
        },
        include: [
          {
            model: ProductImage,
            attributes: {
              exclude: ["id", "createdAt", "updatedAt", "productId"],
            },
            as: "images",
          },
        ],
      });
      const productProperties = await ProductProperties.findAll({
        where: {
          categoryPropertiesId: {
            [Sequelize.Op.in]: sequelize.literal(
              `(SELECT "id" FROM "CategoryProperties" WHERE "categoryId" = (SELECT "categoryId" FROM "Product" WHERE "id" = '${productId}'))`
            ),
          },
        },
        include: [
          {
            model: CategoryProperties,
            attributes: {
              exclude: ["id", "createdAt", "updatedAt", "categoryId"],
            },
            as: "categoryProperties",
          },
        ],
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "id",
            "categoryPropertiesId",
            "productId",
          ],
        },
      });

      const properties = productProperties.reduce((result, current) => {
        const property = current.categoryProperties.property;
        const value = result[property]
          ? [...result[property], current.value]
          : [current.value];
        return {
          ...result,
          [property]: value,
        };
      }, {});
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      product.properties = properties;
      return res.status(200).json({ product, productDetail: properties });
    } catch (err) {
      res.status(500).send("Internal server error");
    }
  },
};
module.exports = productController;
