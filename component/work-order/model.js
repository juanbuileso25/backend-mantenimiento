const DAO = require('./dao');

module.exports = {

    async createInspection({ id_inspection, date_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time }) {
        try {
            return await DAO.createWorkOrder({ id_inspection, date_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time })
        } catch (error) {
            return error
        }
    },
    async getWorkOrder({ id }) {
        try {
            return await DAO.getWorkOrder({ id })
        } catch (error) {
            return error
        }
    },
    async deleteWorkOrder({ id }) {
        try {
            return await DAO.deleteWorkOrder({ id })
        } catch (error) {
            return error
        }
    }
}