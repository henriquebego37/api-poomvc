const db = require('../database/db.js');

class ProductModel {
      static getAll(callback) {
            db.query('SELECT * FROM products', callback);
      }

      //       static getById(id, callback) {
      //             db.query('SELECT * FROM products WHERE id = ?', [id], callback);
      //       }

      //       static create(product, callback) {
      //             db.query('INSERT INTO products SET ?', product, callback);
      //       }

      //       static update(id, product, callback) {
      //             db.query('UPDATE products SET ? WHERE id = ?', [product, id], callback);
      //       }

      //       static delete(id, callback) {
      //             db.query('DELETE FROM products WHERE id = ?', [id], callback);
      //       }

}

module.exports = ProductModel;
