const Sequelize = require('sequelize')
require('dotenv').config()

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306,
//     }
// )

const sequelize = new Sequelize(
    'stream_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: console.log,
    }
)


module.exports = sequelize