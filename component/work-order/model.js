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
    async updateWorkOrder({ id_work_order, id_inspection, date_wo, time_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time, real_time, date_complete, date_revision, date_aprobbal, state }) {
        try {
            return await DAO.updateWorkOrder({ id_work_order, id_inspection, date_wo, time_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time, real_time, date_complete, date_revision, date_aprobbal, state })
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