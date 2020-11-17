const bookHarryPotterMD = require('../models/bookHarryPotterMD');

exports.index = (req, res, next) => {
    // Get books from model
    const book = bookHarryPotterMD.detail();
    // Pass data to view to display list of books
    res.render('books/detail', { book });
};