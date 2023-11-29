require('dotenv').config()
const express = require ('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use('/locations', require('./controllers/locations.js'))

// app.listen(process.env.PORT)