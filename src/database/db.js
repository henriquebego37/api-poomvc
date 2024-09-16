const mysql = require('mysql2');
////-------------------------------->
const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'express'
});
////-------------------------------->
connection.connect((err) => {
      if (err) {
            console.error('Erro ao conectar ao banco de dados: ', err);
            return;
      }
      console.log('sucess conection database mysql! ✅');
});
////-------------------------------->
module.exports = connection;
