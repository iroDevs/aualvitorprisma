/*
  Warnings:

  - Added the required column `idade` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "idade" INTEGER NOT NULL;
