import { PrismaClient as Prisma } from '@prisma/client'
import { Service } from 'typedi'

@Service()
export default class PrismaClient extends Prisma {
  constructor() {
    super()
  }
}
