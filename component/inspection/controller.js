const MODEL = require('./model');

module.exports = {
    async createInspection(req, res){
        let id_machine = req.body.machine;
        let type_inspection = req.body.type_inspection;
        let date_i = req.body.date_i;
        let observation = req.body.observation;
        let employee = req.body.employee;
        let maintenance = req.body.maintenance;

        try {
            const INSPECTION = await MODEL.createInspection({id_machine, type_inspection, date_i, observation, employee, maintenance});
            res.send(INSPECTION);
        } catch (error) {
            console.log(error);
        }
    },
    async getInspections(req, res){
        try {
            const INSPECTIONS = await MODEL.getInspections();
            res.json(INSPECTIONS)
        } catch (error) {
            console.log(error);
        }
    },
    async deleteInspection(req, res){
        let id = req.params.id;
        try {
            const INSPECTION = await MODEL.deleteInspection({id});
            res.send(INSPECTION);
            console.log(id);
        } catch (error) {
            console.log(error);
        }
    }
}