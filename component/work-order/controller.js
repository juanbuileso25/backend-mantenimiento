const MODEL = require('./model');

module.exports = {
    async createWorkOrder(req, res) {
        let id_inspection = req.body.id_inspection;
        let date_wo = req.body.date_wo;
        let zone = req.body.zone;
        let employee = req.body.employee;
        let type_maintenance = req.body.type_maintenance;
        let observation_wo = req.body.observation_wo;
        let activity = req.body.activity;
        let estimated_time = req.body.estimated_time;

        try {
            const WORKORDER = await MODEL.createInspection({ id_inspection, date_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time })
            res.send(WORKORDER)
        } catch (error) {
            res.send(error)
        }
    },
    async getWorkOrder(req, res) {
        let id = req.params.id;

        try {
            const WORK_ORDER = await MODEL.getWorkOrder({ id })
            res.send(WORK_ORDER)
        } catch (error) {
            res.send(error)
        }
    },
    async deleteWorkOrder(req, res) {
        let id = req.params.id;

        try {
            const WORK_ORDER = await MODEL.deleteWorkOrder({ id })
            res.send(WORK_ORDER)
        } catch (error) {
            res.send(error)
        }
    }
}