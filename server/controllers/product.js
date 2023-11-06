const {
  sequelize,
  Sequelize,
  Product,
  ProductImage,
  ProductProperties,
  CategoryProperties,
} = require("../models/index");

const productController = {
  getProducts: async (req, res, next) => {
    try {
      const { pageIndex, pageSize } = req.query;
      if (!pageIndex || !pageSize) {
        res.status(400).json({ message: "Bad request!" });
      }
      const limit = parseInt(pageSize) || 10;
      const page = parseInt(pageIndex) || 1;
      const offset = (page - 1) * limit;
      const products = await Product.findAndCountAll({
        limit: limit,
        offset: offset,
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

      // const properties = productProperties.reduce((result, current) => {
      //   // const property = current.categoryProperties.property;
      //   // console.log({ result, property, key: result[property] });
      //   // const value = result[property]
      //   //   ? result[property]?.push(current.value)
      //   //   : [current.value];
      //   return {
      //     // ...result,
      //     // [property]: value,
      //   };
      // }, {});
      if (!productProperties) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(productProperties);
    } catch (err) {
      console.log({ err });
      res.status(500).send(err);
    }
  },
};
module.exports = productController;
