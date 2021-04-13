const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();


const INSPECTION = require('../component/inspection/routes');
const MACHINE = require('../component/machine/routes');
const WORK_ORDER = require('../component/work-order/routes');

ROUTER.use('/inspection', INSPECTION);
ROUTER.use('/machine', MACHINE);
ROUTER.use('/work-order', WORK_ORDER);


module.exports = ROUTER;