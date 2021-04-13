const DAO = require('./dao');

module.exports = {
    async createInspection({ id_machine, type_inspection, date_i, observation, employee, maintenance, state }) {
        try {
            return await DAO.createInspection({ id_machine, type_inspection, date_i, observation, employee, maintenance, state })
        } catch (error) {
            return error;
        }
    },
    async getInspections() {
        try {
            return await DAO.getInspections();
        } catch (error) {
            return error;
        }
    },
    async deleteInspection({ id }) {
        try {
            return await DAO.deleteInspection({ id });
        } catch (error) {
            return error;
        }
    },
    async getInspection({ id }) {
        try {
            return await DAO.getInspection({ id });
        } catch (error) {
            return error;
        }
    },
    async updateInspection({ id_inspection, id_machine, type_inspection, date_i, time_i, observation, employee, maintenance, state }) {
        try {
            return await DAO.updateInspection({ id_inspection, id_machine, type_inspection, date_i, time_i, observation, employee, maintenance, state });
        } catch (error) {
            return error;
        }
    }
}