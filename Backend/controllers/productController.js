const Product = require('../models/Product');

//Get All products
exports.getProducts = async(req , res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

//Create New Product
exports.creatProduct = async(req , res) => {
    const {name , price , description} = req.body;
    const newProduct = new Product({name , price , description})
    try{
        await newProduct.save()
        res.status(201).json(newProduct);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
};

//Update Product
exports.updateProducct = async (req , res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.json(updated);
    }
    catch (error) {
        res.status(404).json({message : error.message})
    }
};

//Delete Product 
exports.deleteProduct = async (req , res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({message : "Product deleted"})
    }
    catch(err) {
        res.status(404).json({message : err.message})
    }
};
