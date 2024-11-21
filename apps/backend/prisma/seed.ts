import { PrismaClient } from '@prisma/client';
import { events } from 'core/src/constants';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        senha: event.senha,
        nome: event.nome,
        data: event.data,
        local: event.local,
        descricao: event.descricao,
        imagem: event.imagem,
        imagemBackground: event.imagemBackground,
        publicoEsperado: event.publicoEsperado,
        convidados: {
          create: event.convidados.map((guest) => ({
            id: guest.id,
            nome: guest.nome,
            email: guest.email,
            confirmado: guest.confirmado,
            possuiAcompanhantes: guest.possuiAcompanhantes,
            totalAcompanhantes: guest.totalAcompanhantes,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
