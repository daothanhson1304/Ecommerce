const { Product, ProductImage } = require('../models/index');

const productController = {
  getProducts: async (req, res, next) => {
    try {
      const { pageIndex, pageSize } = req.query;
      if (!pageIndex || !pageSize) {
        res.status(400).json({ message: 'Bad request!' });
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
              exclude: ['id', 'createdAt', 'updatedAt', 'productId'],
            },
          },
        ],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      const totalCount = products.count;
      const totalPages = Math.ceil(totalCount / limit);
      res.status(200).json({
        pageIndex: page,
        pageSize: limit,
        totalCount: totalCount,
        totalPages: totalPages,
        products: products.rows,
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  },
};
module.exports = productController;
