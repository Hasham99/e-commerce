import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: "Category",
        required: true
    },
    file: {
        type: String
        // data: Buffer,
        // contentType: String
    },
    shipping: {
        type: Boolean,
        default: 0
        // required: true
    },

}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema)