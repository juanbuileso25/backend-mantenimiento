const MYSQL = require('mysql2');
const CONFIG = require('../../config/environments/default');

const CONNECTION = MYSQL.createConnection({
    host: CONFIG.DB.host,
    user: CONFIG.DB.username,
    database: CONFIG.DB.database
});

try {
    CONNECTION.connect();
    console.log('Conexion exitosa');
} catch (error) {
    console.log('Fallo la conexion: ', error);
}

module.exports = () => {
   return CONNECTION;
}