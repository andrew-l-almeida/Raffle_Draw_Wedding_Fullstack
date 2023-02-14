const {DataTypes} = require('sequelize')

const sequelize = require('../util/database')

const Buyer = sequelize.define('buyer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Buyer