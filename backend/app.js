const express = require('express')
require('dotenv').config()
const Buyer = require('./models/buyer')
const BuyerNumber = require('./models/buyer-number')
var cors = require('cors')



const sequelize = require('./util/database')
const {Sequelize} = require('sequelize')
const routes = require('./routes/routes')

const Op = Sequelize.Op
Buyer.hasMany(BuyerNumber)

const app = express()
app.use(cors()) // Use this after the variable declaration
app.use(routes)
sequelize.sync().then(result => {
    console.log(result)
    app.listen(3001)
}).catch(err => {
    console.log(err)
})



