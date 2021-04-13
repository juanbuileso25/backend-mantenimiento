const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONTROLLER = require('./controller');

ROUTER.route('/')
    .post(CONTROLLER.createWorkOrder)


module.exports = ROUTER;