const DAO = require('./dao');

module.exports = {
    async getMachines(){
        try {
           return await DAO.getMachines();
        } catch (error) {
            return error;
        }
    }
}