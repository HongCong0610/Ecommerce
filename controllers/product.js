const Product = require('../models/product');

module.exports.index = async(req, res) => {
    const products = await Product.find();
    res.json(products);
};

module.exports.createProduct = async(req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        image_url: req.body.image_url
    })

    product.save(function(err, doc) {
        if(err){
            return console.log(err);
        }
            
        res.send(doc);
    })
}