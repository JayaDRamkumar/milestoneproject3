// applyController.js

const express = require('express');
const router = express.Router();
const apply = require('../models/apply');

router.post('/', async (req, res) => {
  // Add logic here to handle the application submission
  // You can save the application details to your database, send email notifications, etc.
  try {
    const newApplication = new apply(req.body);
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ error: 'Unable to save application' });
  }
});

module.exports = router;
