const ProductService = require('../services/productService');

class ProductController {
      static getAllProducts(req, res) {
            ProductService.getAllProducts((err, results) => {
                  if (err) {
                        return res.status(500).json({ error: 'Erro ao buscar os produtos' });
                  }
                  res.json(results);
            });
      }

      //   static getProductById(req, res) {
      //     const id = req.params.id;
      //     ProductService.getProductById(id, (err, result) => {
      //       if (err) {
      //         return res.status(500).json({ error: 'Erro ao buscar o produto' });
      //       }
      //       if (result.length === 0) {
      //         return res.status(404).json({ error: 'Produto não encontrado' });
      //       }
      //       res.json(result[0]);
      //     });
      //   }

      //   static createProduct(req, res) {
      //     const product = req.body;
      //     ProductService.createProduct(product, (err, result) => {
      //       if (err) {
      //         return res.status(500).json({ error: 'Erro ao criar o produto' });
      //       }
      //       res.status(201).json({ id: result.insertId, ...product });
      //     });
      //   }

      //   static updateProduct(req, res) {
      //     const id = req.params.id;
      //     const product = req.body;
      //     ProductService.updateProduct(id, product, (err, result) => {
      //       if (err) {
      //         return res.status(500).json({ error: 'Erro ao atualizar o produto' });
      //       }
      //       res.json({ id, ...product });
      //     });
      //   }

      //   static deleteProduct(req, res) {
      //     const id = req.params.id;
      //     ProductService.deleteProduct(id, (err, result) => {
      //       if (err) {
      //         return res.status(500).json({ error: 'Erro ao deletar o produto' });
      //       }
      //       res.status(204).send(); // No Content
      //     });
      //   }
}

module.exports = ProductController;
