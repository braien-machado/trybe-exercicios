const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'braien',
  password: 'Mysql@2022',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;