const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'braien',
  password: 'Mysql@2022',
  database: 'model_example'
});

module.exports = connection;