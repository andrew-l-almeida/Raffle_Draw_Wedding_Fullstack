const {DataTypes} = require('sequelize')

const sequelize = require('../util/database')

const BuyerNumber = sequelize.define('buyerNumber', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = BuyerNumber