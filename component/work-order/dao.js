const CONNECTION = require('../../services/DBConnection/database');
const CONN = CONNECTION();

module.exports = {

    createWorkOrder({ id_inspection, date_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL create_work_order(?,?,?,?,?,?,?,?)', [id_inspection, date_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time])
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
    },
    getWorkOrder({ id }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL get_work_order(?)', [id])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows[0]
                    })
                })
                .catch(error => {
                    return reject({
                        success: false,
                        value: error
                    })
                })
        })
    },
    deleteWorkOrder({ id }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL delete_work_order(?)', [id])
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