const mysql =require('mysql2');


const connection =mysql.createConnection({
       host:'localhost',
       user:'root',
       database:'node-app',
       password:'Xsrx.1212'
}); 

module.exports= connection.promise();