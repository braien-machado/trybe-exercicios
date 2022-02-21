const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE});

module.exports = connection;