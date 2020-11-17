const express = require('express');
const router = express.Router();
const bookHarryPotterCT = require('../controllers/bookHarryPotterCT');

/* GET list of books. */
router.get('/', bookHarryPotterCT.index);

module.exports = router;