const express = require('express');
const router = express.Router();
const downloadController = require('../controller/download.controller');

router.get('/:id',downloadController.getMusicPath)


module.exports = router;