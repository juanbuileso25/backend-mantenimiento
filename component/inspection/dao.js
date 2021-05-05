const CONNECTION = require('../../services/DBConnection/database');
const CONN = CONNECTION();

module.exports = {

    createInspection({ id_machine, type_inspection, date_i, observation_i, employee, maintenance, state }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query(' CALL create_inspection(?, ?, ?, ?, ?, ?, ?)', [id_machine, type_inspection, date_i, observation_i, employee, maintenance, state])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch(error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    },
    getInspections() {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL get_inspections()')
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
    },
    deleteInspection({ id }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL delete_inspection(?)', [id])
                .then(([rows]) => {
                    return resolve({
                        success: true,
                        value: rows
                    });
                })
                .catch(error => {
                    return reject({
                        success: false,
                        value: error
                    });
                });
        });
    },
    getInspection({ id }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL get_inspection(?)', [id])
                .then(([row]) => {
                    return resolve({
                        success: true,
                        value: row[0]
                    })
                })
                .catch(err => {
                    return reject({
                        success: false,
                        value: err
                    })
                })
        })
    },
    updateInspection({ id_inspection, id_machine, type_inspection, date_i, time_i, observation_i, employee, maintenance, state }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL update_inspection(?,?,?,?,?,?,?,?,?)', [id_inspection, id_machine, type_inspection, date_i, time_i, observation_i, employee, maintenance, state])
                .then(([row]) => {
                    return resolve({
                        success: true,
                        value: row[0]
                    })
                })
                .catch(err => {
                    return reject({
                        success: false,
                        value: err
                    })
                })
        })
    },
    updateStateInspection({ id_inspection }) {
        return new Promise((resolve, reject) => {
            CONN.promise().query('CALL update_state_inspection(?)', [id_inspection])
                .then(([row]) => {
                    return resolve({
                        success: TextTrackCue,
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