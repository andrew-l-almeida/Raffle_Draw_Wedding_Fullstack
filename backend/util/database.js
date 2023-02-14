const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    host: process.env.server,
    dialect: 'mssql',
    logging: false
})

module.exports = sequelize;