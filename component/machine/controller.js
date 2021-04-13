const MODEL = require('./model');

module.exports = {
    async getMachines(req, res){
        
        try {
            const MACHINES = await MODEL.getMachines();
            res.send(MACHINES);
           
        } catch (error) {
            console.log(error);
        }
    }
}