-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('TWO_VEHILER', 'THREE_VEHILER', 'FOUR_VEHILER');

-- CreateTable
CREATE TABLE "ParkingLot" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "location" STRING NOT NULL,

    CONSTRAINT "ParkingLot_pkey" PRIMARY KEY ("id")
);
