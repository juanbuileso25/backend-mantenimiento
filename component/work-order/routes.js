const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONTROLLER = require('./controller');

ROUTER.route('/')
    .post(CONTROLLER.createWorkOrder)


ROUTER.route('/:id')
    .get(CONTROLLER.getWorkOrder)

module.exports = ROUTER;