const Buyer = require('../models/buyer')
const BuyerNumber = require('../models/buyer-number')

module.exports = Buyer.hasMany(BuyerNumber)