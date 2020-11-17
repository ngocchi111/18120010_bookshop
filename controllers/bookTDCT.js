const bookTDMD = require('../models/bookTDMD');

exports.index = (req, res, next) => {
    // Get books from model
    const book = bookTDMD.detail();
    // Pass data to view to display list of books
    res.render('books/detail', { book });
};