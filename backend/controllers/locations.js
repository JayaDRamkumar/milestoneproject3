const router = require ('express').Router()
const location = require('../models/location')
const apply= require('../models/apply')

router.post('/', async (req, res) => {
    if (!req.body.propertyimage) {
        req.body.propertyimage ='https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg'
    }

    if (!req.body.address) {
      req.body.address = 'Any Address'
  }
   
   if (!req.body.state) {
    req.body.state = 'Any State'
}
if (!req.body.zipcode) {
    req.body.zipcode = 'Any Zipcode'
}
if (!req.body.bedroomsandbathrooms) {
    req.body.price = '5'
}
if (!req.body.bedroomsandbathrooms) {
    req.body.price = 'Any Zipcode'
}
   
})

router.get('/locations', async (req, res) => {
    try{
    const locations = await Locations.find()
    console.log(locations)
    res.json(locations)
  }catch(error){
    console.error('Error fecthing locations:', error)
    res.status(500).json({error: 'Unable to fetch locations'})
  }
  }) 

module.exports = router;