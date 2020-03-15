const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/', ProductController.index);
    app.post('/products', ProductController.createProduct);
    app.get('/getallproducts', ProductController.getAllProducts)
    app.get('/products/:id', ProductController.getProduct)
}