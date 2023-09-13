const mongoose = require('mongoose')
const book = require('./bookSchema').bookSchema

const Book = mongoose.model('book',book)

module.exports = {
    Book
}