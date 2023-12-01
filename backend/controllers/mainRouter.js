const express = require('express');
const locationRouter = require('./location'); // Import the location router
const applyController = require('./applyController');

const router = express.Router();

// Use the location router for /locations routes
router.use('/locations', locationRouter);

// Use the applyController for /apply routes
router.use('/apply', applyController);

module.exports = router;
