const CONNECTION = require('../../services/DBConnection/database');
const CONN = CONNECTION();

module.exports = {

    getMachines() {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL get_machines()')
                .then(([rows]) => {
                    return resolve({
                        value: rows[0]
                    });
                })
                .catch(error => {
                    return reject({
                        error
                    });
                });
        });
    }
}