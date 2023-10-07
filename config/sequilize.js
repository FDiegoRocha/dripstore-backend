const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
} = process.env

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: DATABASE_PORT,
  }
)

module.exports = {
  sequelize,
}
