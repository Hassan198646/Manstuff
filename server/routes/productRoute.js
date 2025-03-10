import express from "express";
import product from "../controllers/product.js";
import uploads from "../CloudinaryConfig.js";


const router = express.Router();
router.get('/products', product.getAllProducts);
router.get('/products/:id', product.getProductById);
router.post('/products',uploads.single("image"), product.createProduct);
router.put('/products/:id',uploads.single("image"),product.updateProduct);
router.delete('/products/:id',product.deleteProduct);



export default router;