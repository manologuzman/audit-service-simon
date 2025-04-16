/*
  Warnings:

  - You are about to drop the column `destLat` on the `Routing` table. All the data in the column will be lost.
  - You are about to drop the column `destLng` on the `Routing` table. All the data in the column will be lost.
  - You are about to drop the column `route` on the `Routing` table. All the data in the column will be lost.
  - Added the required column `destinationLat` to the `Routing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinationLng` to the `Routing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Routing" DROP COLUMN "destLat",
DROP COLUMN "destLng",
DROP COLUMN "route",
ADD COLUMN     "destinationLat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "destinationLng" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "RoutingPoint" (
    "id" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "routingId" TEXT NOT NULL,

    CONSTRAINT "RoutingPoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoutingPoint" ADD CONSTRAINT "RoutingPoint_routingId_fkey" FOREIGN KEY ("routingId") REFERENCES "Routing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
