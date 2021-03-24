const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONTROLLER = require('./controller');

ROUTER.route('/')
.get(CONTROLLER.getInspections)
.post(CONTROLLER.createInspection) 

ROUTER.route('/:id')
.delete(CONTROLLER.deleteInspection)



module.exports = ROUTER;