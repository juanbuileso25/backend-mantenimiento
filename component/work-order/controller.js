const MODEL = require('./model');

module.exports = {
    async createWorkOrder(req, res) {
        let id_inspection = req.body.id_inspection;
        let date_wo = req.body.date_wo;
        let zone = req.body.zone;
        let employee = req.body.employee;
        let type_maintenance = req.body.type_maintenance;
        let observation = req.body.observation;
        let activity = req.body.activity;
        let estimated_time = req.body.estimated_time;
        let state = req.body.state;

        try {
            const WORKORDER = await MODEL.createInspection({ id_inspection, date_wo, zone, employee, type_maintenance, observation, activity, estimated_time, state })
            res.send(WORKORDER)
        } catch (error) {
            res.send(error)
        }
    }
}