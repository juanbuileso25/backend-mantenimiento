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
    async updateWorkOrder(req, res) {
        let id_work_order = req.params.id
        let id_inspection = req.body.id_inspection;
        let date_wo = req.body.date_wo;
        let time_wo = req.body.date_wo;
        let zone = req.body.zone;
        let employee = req.body.employee;
        let type_maintenance = req.body.type_maintenance;
        let observation_wo = req.body.observation_wo;
        let activity = req.body.activity;
        let estimated_time = req.body.estimated_time;
        let real_time = req.body.real_time;
        let date_complete = req.body.date_complete;
        let date_revision = req.body.date_revision;
        let date_aprobbal = req.body.date_aprobbal;
        let state = req.body.state;

        try {
            const WORK_ORDER = await MODEL.updateWorkOrder({ id_work_order, id_inspection, date_wo, time_wo, zone, employee, type_maintenance, observation_wo, activity, estimated_time, real_time, date_complete, date_revision, date_aprobbal, state })
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