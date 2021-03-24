const DAO = require('./dao');

module.exports = {
    async createInspection({ id_machine, type_inspection, date_i, observation, employee, maintenance }){
        try {
            return await DAO.createInspection({ id_machine, type_inspection, date_i, observation, employee, maintenance})
        } catch (error) {
            return error;
        }
    },
    async getInspections(){
        try {
            return await DAO.getInspections();
        } catch (error) {
            return error;
        }
    },
    async deleteInspection({id}){
        try {
            return await DAO.deleteInspection({id});
        } catch (error) {
            return error;
        }
    }
}