const parkingLotService = require('../services/parkinglot.service');

async function createParkingLot(req, res) {
    const response = await parkingLotService.createParkingLot(req.body);
    res.json(response); 
}

module.exports = {
    createParkingLot
}