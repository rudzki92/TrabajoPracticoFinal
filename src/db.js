const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',         // Cambia esto si necesitas acceso remoto
    user: 'pz000553_gastos',   // Usuario
    password: 'VIfati51we',    // Contraseña
    database: 'pz000553_gastos' // Nombre de la base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});

module.exports = connection;
