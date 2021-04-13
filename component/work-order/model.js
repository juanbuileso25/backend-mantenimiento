const DAO = require('./dao');

module.exports = {

    async createInspection({ id_inspection, date_wo, zone, employee, type_maintenance, observation, activity, estimated_time, state }) {
        try {
            return await DAO.createWorkOrder({ id_inspection, date_wo, zone, employee, type_maintenance, observation, activity, estimated_time, state })
        } catch (error) {
            return error
        }
    }
}