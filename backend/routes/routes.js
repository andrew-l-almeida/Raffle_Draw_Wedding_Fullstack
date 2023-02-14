const express = require('express')

const buyersController = require('../controllers/buyersController')

const routes = express.Router() 

routes.get('/getBuyers', buyersController.getBuyers)

module.exports = routes;
