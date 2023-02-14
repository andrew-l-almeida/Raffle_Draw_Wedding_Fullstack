const Buyer = require("../models/buyer")
const BuyerNumber = require("../models/buyer-number")

exports.getBuyers = async (req, res) => {
    try{
        const buyers = await Buyer.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            },
            include: {
                model: BuyerNumber,
                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt', 'buyerId']
                }
            }
        })
        res.send(buyers)
    }catch(err) {
        console.log(err)
    }
}