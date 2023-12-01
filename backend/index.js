require('dotenv').config()
const express = require ('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT
// const mainRouter = require('./mainRouter');



// Connect to your MongoDB database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());


// Use the router

app.use('/locations', require('./controllers/locations.js'))

// app.get ('/', (req, res) => {
//   console.log('hello world')
//   res.send('Hello Ric')
// })



// Start server
app.listen(process.env.PORT, () => {
  console.log('running at port:', process.env.PORT)
})