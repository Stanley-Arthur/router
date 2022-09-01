const router = require("express").Router;

const {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
}= require("../controllers/products.controller")

const productRouter = router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.patch("/", updateProduct);
productRouter.delete("/", deleteProduct);

module.exports = productRouter;