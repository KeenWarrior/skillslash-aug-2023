const prisma = require('../prisma');

async function createParkingLot(partkingLot) {


    console.log(partkingLot);
    const response = await prisma.parkingLot.create({
        data: {
            name: partkingLot.name,
            location: partkingLot.location,
        }
    })

    console.log("Reched here")

    return response;
}

async function getParkingLotById(id) {

}

async function getParkingLots() {

}

async function updateParkingLotById(id, parkingLot) {

}

async function deleteParkingLotById(id) {

}

module.exports = {
    createParkingLot,
    getParkingLotById,
    getParkingLots,
    updateParkingLotById,
    deleteParkingLotById
}