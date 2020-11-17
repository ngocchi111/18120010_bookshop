const bookLHMD = require('../models/bookLHMD');

exports.index = (req, res, next) => {
    // Get books from model
    const book = bookLHMD.detail();
    // Pass data to view to display list of books
    res.render('books/detail', { book });
};