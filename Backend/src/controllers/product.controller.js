import { apiError } from "../utils/apiError.js"
import { Product } from "../models/product.model.js"
import { apiResponse } from "../utils/apiResponse.js"
import slugify from "slugify"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

//create product
const createProductController = asyncHandler(async (req, res) => {
    try {
        const { name, description, price, quantity, category, shipping } = req.body;
        // validation - not empty
        if ([name, description, price, quantity, category].some((field) => field?.trim() === "")) {
            throw new apiError(400, "All fields required")
        }
        // check for images and check for avatar
        // const fileLocalPath = req.files?.file[0]?.path;
        let fileLocalPath;
        if (req.files && Array.isArray(req.files.file) && req.files.file.length > 0) {
            fileLocalPath = req.files?.file[0]?.path;
        }
        // upload them to cloudinary
        const file = fileLocalPath ? await uploadOnCloudinary(fileLocalPath) : null;
        console.log(file?.url);

        const product = await Product.create({
            name,
            slug: slugify(name),
            description,
            price,
            quantity,
            category,
            shipping,
            file: file?.url || ""
        })
        console.log(product);

        return res
            .status(201)
            .json(new apiResponse(201, "Product Created successfully", product))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while creating product")
            )
    }
})

//get all products
const getProductsController = asyncHandler(async (req, res) => {
    try {
        const allProducts = await Product.find({})
        return res
            .status(201)
            .json(new apiResponse(201, "All Products", allProducts))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while getting all products")
            )
    }
})

//get product by id
const getProductController = asyncHandler(async (req, res) => {
    try {

        const { id } = req.params
        const productById = await Product.findById(id)
        if (!productById) {
            throw new apiError(400, "Product not found")

        }
        return res
            .status(201)
            .json(new apiResponse(201, "single Product by id", productById))

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while getting product by id")
            )
    }
})

//get product photo by id
const getProductPhotoController = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const productPhoto = await Product.findById(id).select("file")
        return res
            .status(201)
            .json(new apiResponse(201, productPhoto, "single Product file by id "))


    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while getting product by id")
            )
    }
})

// update product by id
const updateProductController = asyncHandler(async (req, res) => {
    try {

        const { id } = req.params;
        const { name, description, price, quantity, category, shipping } = req.body;

        // Check for images and upload to cloudinary if a new file is provided
        let fileLocalPath;
        if (req.files && Array.isArray(req.files.file) && req.files.file.length > 0) {
            fileLocalPath = req.files?.file[0]?.path;
        }
        const file = fileLocalPath ? await uploadOnCloudinary(fileLocalPath) : null;

        // Update the product using findByIdAndUpdate
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                slug: slugify(name),
                description,
                price,
                quantity,
                category,
                shipping,
                ...(file && { file: file.url }) // only update file if a new one is provided
            },
            { new: true, runValidators: true } // new: true returns the updated document
        );

        if (!updatedProduct) {
            throw new apiError(404, "Product not found");
        }

        return res
            .status(200)
            .json(new apiResponse(200, updatedProduct, "Product Updated successfully"));

    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error.message || "Error while updating product")
            );
    }
});


//delete product by id
const deleteProductController = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id)
        return res
            .status(201)
            .json(new apiResponse(201, "Product Deleted"))


    } catch (error) {
        return res
            .status(500)
            .json(
                new apiError(500, error || "Error while getting product by id")
            )
    }
})

export { createProductController, getProductsController, getProductController, updateProductController, deleteProductController, getProductPhotoController }