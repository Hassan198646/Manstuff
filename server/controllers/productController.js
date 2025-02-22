import Product from "../models/Product.js";

const productController = {
    getAllProducts: async (req, res) => {
        const products = await Product.find();
        res.json(products);
    },
    getProductById: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.json(product);
    },
    createProduct: async (req, res) => {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json(newProduct);
    }
};

export default productController;
