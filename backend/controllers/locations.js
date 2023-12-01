const express = require('express');
const router = require ('express').Router()
const location = require('../models/location')
const apply= require('../models/apply')

router.post('/', async (req, res) => {
    if (!req.body.propertyimage) {
        req.body.propertyimage ='https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg';
    }
    if (!req.body.address) {
      req.body.address = 'Any Address';
    }
    if (!req.body.state) {
      req.body.state = 'Any State';
    }
    if (!req.body.zipcode) {
      req.body.zipcode = 'Any Zipcode';
    }
    if (!req.body.bedroomsandbathrooms) {
      req.body.bedroomsandbathrooms = 'Any';
    }
    if (!req.body.price) {
      req.body.price = 'Any Price';
    }

    try {
        let newLocation = new location(req.body);
        console.log(newLocation);
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (error) {
        console.error('Error saving location:', error);
        res.status(500).json({error: 'Unable to save location'});
    }
});
// Get all locations
router.get('/', async (req, res) => {
    try{
    const locations = await location.find()
    console.log(locations)
    res.json(locations)
  }catch(error){
    console.error('Error fecthing locations:', error)
    res.status(500).json({error: 'Unable to fetch locations'})
  }
  }) 

  // get a single location
  router.get('/:id', async (req, res) => {
    try {
      const locationById = await location.findById(req.params.id); 
  
      if (!locationById) {
        return res.status(404).json({ error: 'Location not found' });
      }
  
      res.json(locationById);
    } catch (error) {
      console.error('Error fetching a location by ID:', error);
      res.status(500).json({ error: 'Unable to fetch the location' });
    }
  });
// Render the add location form page
router.get('/add-location', (req, res) => {
  console.log('Rendering add location form');
  res.send('Render your add location form page here');
});

// Handle the form submission to add a new location
router.post('/add-location', async (req, res) => {
  console.log('Handling form submission for add location');
  try {
    let newLocation = new location(req.body);
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    console.error('Error saving location:', error);
    res.status(500).json({ error: 'Unable to save location' });
  }
});

module.exports = router;




