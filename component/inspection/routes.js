const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONTROLLER = require('./controller');

ROUTER.route('/')
    .get(CONTROLLER.getInspections)
    .post(CONTROLLER.createInspection)

ROUTER.route('/:id')
    .get(CONTROLLER.getInspection)
    .put(CONTROLLER.updateInspection)
    .delete(CONTROLLER.deleteInspection)



module.exports = ROUTER;