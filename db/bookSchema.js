const mongoose = require('mongoose')
const {Schema} = mongoose 

const bookSchema = new Schema({
    bookId:String,
    name:String,
    price:Number,
    author:String
})

module.exports = {
    bookSchema
}