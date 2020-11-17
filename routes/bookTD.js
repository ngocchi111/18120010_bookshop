const express = require('express');
const router = express.Router();
const bookTDCT = require('../controllers/bookTDCT');

/* GET list of books. */
router.get('/', bookTDCT.index);

module.exports = router;