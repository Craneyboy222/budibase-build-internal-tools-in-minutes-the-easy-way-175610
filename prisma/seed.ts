import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
(async () => {
  try {
    await prisma.item.create({ data: { title: "Getting started with Budibase | Build internal tools in minutes, the easy way", description: "Your first record in the system." } });
  } finally {
    await prisma.$disconnect();
  }
})();
