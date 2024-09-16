const ProductModel = require('../models/productModel');

class ProductService {
      static getAllProducts(callback) {
            ProductModel.getAll(callback);
      }

      //   static getProductById(id, callback) {
      //     ProductModel.getById(id, callback);
      //   }

      //   static createProduct(product, callback) {
      //     ProductModel.create(product, callback);
      //   }

      //   static updateProduct(id, product, callback) {
      //     ProductModel.update(id, product, callback);
      //   }

      //   static deleteProduct(id, callback) {
      //     ProductModel.delete(id, callback);
      //   }
}

module.exports = ProductService;
