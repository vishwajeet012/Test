const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'exam',
  password: 'admin@123'
});

connection.connect((err) => {

    if(!err)
        console.log('Database is connected!');
    else
        console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
    });
module.exports = connection;
