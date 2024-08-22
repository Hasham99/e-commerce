import { Router } from "express";
import { createProductController, getProductsController, getProductController, updateProductController, deleteProductController, getProductPhotoController } from "../controllers/product.controller.js"
import { isAdminController, verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js"
const router = Router();


// auth route

//create product
router.route("/create-product").post(verifyJWT, isAdminController, upload.fields([
    {
        name: "file",
        maxCount: 1

    },
]), createProductController)

//get all products
router.route("/get-products").get(getProductsController)

//get product by id
router.route("/get-product/:id").get(getProductController)

//get file product by id
router.route("/get-product/file/:id").get(getProductPhotoController)

//update product by id
router.route("/update-product/:id").put(verifyJWT, isAdminController, upload.fields([
    {
        name: "file",
        maxCount: 1

    }]), updateProductController)

//delete product by id
router.route("/delete-product/:id").post(verifyJWT, isAdminController, deleteProductController)


router.route("/test").get((req, res) => {
    return res.status(200).json({ message: "Server is working!" });
});


export default router;