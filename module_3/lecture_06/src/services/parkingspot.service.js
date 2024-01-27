const prisma = require('../prisma');

async function createParkingSpot(partkingSpot) {
    const response = await prisma.partkingSpot.create({
        data: {
            parkingLotId: partkingSpot.parkingLotId,
            floor: partkingSpot.floor
        }
    })

    return response;
}


module.exports = {
    createParkingSpot
}