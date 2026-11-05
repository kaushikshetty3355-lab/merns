const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    Id: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },

    thumbnail: { type: String }

}, {
    timestamps: true
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel
