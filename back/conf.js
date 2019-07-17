const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'root', // le nom d'utilisateur
    password: 'Chouchou69!', // le mot de passe
    database: 'willy_circus', // le nom de la base de données
});
module.exports = connection;