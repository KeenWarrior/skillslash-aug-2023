const parkingSpotService = require('../services/parkingspot.service');

async function createParkingSpot(req, res) {
    const response  = await parkingSpotService.createParkingSpot(req.body);
    res.json(response);
}

module.exports = {
    createParkingSpot
}