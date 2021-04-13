const CONNECTION = require('../../services/DBConnection/database');
const CONN = CONNECTION();

module.exports = {

    createWorkOrder({ id_inspection, date_wo, zone, employee, type_maintenance, observation, activity, estimated_time, state }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL create_work_order(?,?,?,?,?,?,?,?,?)', [id_inspection, date_wo, zone, employee, type_maintenance, observation, activity, estimated_time, state])
                .then(([row]) => {
                    return resolve({
                        success: true,
                        value: row
                    })
                })
                .catch(error => {
                    return reject({
                        success: false,
                        value: error
                    })
                })
        })
    }
}