const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();


const INSPECTION = require('../component/inspection/routes');

ROUTER.use('/inspection', INSPECTION);


module.exports = ROUTER;