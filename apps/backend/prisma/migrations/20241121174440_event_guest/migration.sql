-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "imagemBackground" TEXT NOT NULL,
    "publicoEsperado" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "guests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmado" BOOLEAN NOT NULL,
    "possuiAcompanhantes" BOOLEAN NOT NULL,
    "totalAcompanhantes" INTEGER NOT NULL,
    "eventoId" TEXT,
    CONSTRAINT "guests_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "events" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_alias_key" ON "events"("alias");
