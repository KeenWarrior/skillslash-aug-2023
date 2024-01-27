-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('TWO_VEHILER', 'THREE_VEHILER', 'FOUR_VEHILER');

-- CreateTable
CREATE TABLE "ParkingLot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ParkingLot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartkingSpot" (
    "id" SERIAL NOT NULL,
    "parkingLotId" INTEGER NOT NULL,
    "floorNumber" INTEGER NOT NULL,
    "vehicleType" "VehicleType" NOT NULL,

    CONSTRAINT "PartkingSpot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartkingSpot" ADD CONSTRAINT "PartkingSpot_parkingLotId_fkey" FOREIGN KEY ("parkingLotId") REFERENCES "ParkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
