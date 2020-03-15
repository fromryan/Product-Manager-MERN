const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'title must be at least 3 charactersa']
    },
    price: { type: Number },
    description: { type: String }
}, {timestamps: true})

module.exports.Product = mongoose.model("Product", ProductSchema)
