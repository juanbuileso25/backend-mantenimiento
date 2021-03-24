const CONNECTION = require('../../services/DBConnection/database');
const CONN = CONNECTION();

module.exports = {

    createInspection({id_machine, type_inspection, date_i, observation, employee, maintenance}){
        return new Promise((resolve, reject) => {
            CONN.promise().query(' CALL create_inspection(?, ?, ?, ?, ?, ?)', [id_machine, type_inspection, date_i, observation, employee, maintenance])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch( error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    },
    getInspections(){
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL get_inspections()')
                .then(([rows]) => {
                    return resolve({
                        value: rows[0]
                    });
                })
                .catch( error => {
                    return reject({
                        error
                    });
                });
        });
    },
    deleteInspection({id}){
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL delete_inspection(?)', [id])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch( error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    }

}