-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turn" (
    "id" SERIAL NOT NULL,
    "driverset" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DriverToTurn" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_name_key" ON "Driver"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Turn_driverset_key" ON "Turn"("driverset");

-- CreateIndex
CREATE UNIQUE INDEX "_DriverToTurn_AB_unique" ON "_DriverToTurn"("A", "B");

-- CreateIndex
CREATE INDEX "_DriverToTurn_B_index" ON "_DriverToTurn"("B");

-- AddForeignKey
ALTER TABLE "_DriverToTurn" ADD CONSTRAINT "_DriverToTurn_A_fkey" FOREIGN KEY ("A") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverToTurn" ADD CONSTRAINT "_DriverToTurn_B_fkey" FOREIGN KEY ("B") REFERENCES "Turn"("id") ON DELETE CASCADE ON UPDATE CASCADE;
