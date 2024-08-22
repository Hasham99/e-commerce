import { Router } from "express";
import { createCategoryController, updateCategoryController, allCategoriesController, categoryController, deleteCategoryController } from "../controllers/category.controller.js"
import { isAdminController, verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//create category
router.route("/create-category").post(verifyJWT, isAdminController, createCategoryController)

//update category
router.route("/update-category/:id").put(verifyJWT, isAdminController, updateCategoryController)

//get all categories
router.route("/get-categories").get(allCategoriesController)

//get single category
router.route("/get-category/:slug").get(categoryController)

//delete  category
router.route("/delete-category/:id").delete(verifyJWT, isAdminController, deleteCategoryController)


export default router