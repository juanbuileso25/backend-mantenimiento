const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONTROLLER = require('./controller');

ROUTER.route('/')
.get(CONTROLLER.getMachines)


module.exports = ROUTER;