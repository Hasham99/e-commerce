import { apiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { Category } from "../models/category.model.js"
import { apiResponse } from "../utils/apiResponse.js";
import slugify from "slugify"

//create category
const createCategoryController = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json(new apiResponse(400, "name is required"))
        }

        const existingCategory = await Category.findOne({ name })

        if (existingCategory) {
            return res.status(200).json(new apiResponse(200, "Category already exist"))
        }
        const category = await new Category({ name, slug: slugify(name) }).save()

        return res
            .status(201)
            .json(new apiResponse(201, category, "Category created"))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error in Category")
            )
    }
})


//get all category
const allCategoriesController = asyncHandler(async (req, res) => {
    try {

        const category = await Category.find({})

        return res
            .status(201)
            .json(new apiResponse(201, category, "All Categories"))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while getting all Category")
            )
    }
})

//update category
const updateCategoryController = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params
        if (!name) {
            return res.status(400).json(new apiResponse(400, "name is required"))
        }
        const category = await Category.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })

        return res
            .status(201)
            .json(new apiResponse(201, category, "Category updated"))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while updating Category")
            )
    }
})

//get single category
const categoryController = asyncHandler(async (req, res) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug })

        return res
            .status(201)
            .json(new apiResponse(201, category, "All Categories"))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while getting Category by id")
            )
    }
})
//get single category
const deleteCategoryController = asyncHandler(async (req, res) => {
    try {

        const { id } = req.params;
        await Category.findByIdAndDelete(id)

        return res
            .status(201)
            .json(new apiResponse(201, "category delete"))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while deleting Category by id")
            )
    }
})

export { createCategoryController, updateCategoryController, allCategoriesController, categoryController, deleteCategoryController }