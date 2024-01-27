const express = require('express');
const cors = require('cors');
const parkingLotController = require('./controllers/parkinglot.controller');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/api/parkinglots', parkingLotController.createParkingLot);

module.exports = app;