const mongoose = require('mongoose')
productModel = require('../models/ProductModel');
exports.addProduct = async (req, res) => {
    const new_product = new productModel(req.body)
    const result = await new_product.save()
    res.status(200).json(result) 
}

exports.showProducts = async (req, res) => {
    const products = await productsModel.find()
    if (products != null) {
        res.status(200).json(products)
    } else {
        res.status(404).json({ 'message': 'No Products' })
    }
}

exports.showProduct = async (req,res) => {
    const product = productModel.FindById()
     if (products!= null) {
        res.status(200).json('not connected')
        
    } else {
        res.status(404).json(message = 'not found')
    } 
}

exports.updateProduct = async (req, res) => {
    const product = await productModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ message: 'updated successfully...' })
}

exports.delProduct = async (req, res) => {
    const product = await productModel.findByIdAndDelete(req.params.id)
    if (product != null) {
        res.status(200).json({ message: 'deleted successfully...' })
    } else {
        res.status(404).json({ message: 'not found...' })
    }
}

