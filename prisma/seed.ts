import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: 'alice@email.io',
      name: 'Alice',
    },
  })
  await prisma.user.create({
    data: {
    email: 'bob@email.io',
    name: 'Bob'
    },
  })
}
  
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })