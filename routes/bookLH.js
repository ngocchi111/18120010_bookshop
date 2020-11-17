const express = require('express');
const router = express.Router();
const bookLHCT = require('../controllers/bookLHCT');

/* GET list of books. */
router.get('/', bookLHCT.index);

module.exports = router;