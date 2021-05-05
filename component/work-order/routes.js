const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONTROLLER = require('./controller');

ROUTER.route('/')
    .post(CONTROLLER.createWorkOrder)


ROUTER.route('/:id')
    .get(CONTROLLER.getWorkOrder)
    .put(CONTROLLER.updateWorkOrder)
    .delete(CONTROLLER.deleteWorkOrder)


module.exports = ROUTER;
