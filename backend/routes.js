const express = require('express');
const getData =require('./controllers/apidata')
const router = express.Router();

router.get('/',getData);

module.exports = router;