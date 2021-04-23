const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONTROLLER = require('./controller');

ROUTER.route('/')
    .post(CONTROLLER.createWorkOrder)


ROUTER.route('/:id')
    .get(CONTROLLER.getWorkOrder)
    .delete(CONTROLLER.deleteWorkOrder)

module.exports = ROUTER;