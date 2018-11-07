// conexão com o BD
var mysql = require('mysql');

var connMySQL = function() { 
      return  connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias',
        port : '3307'   
    });
}

module.exports = function() {
    return connMySQL;
}

    