import { User } from '../user.entity'
import PrismaClient from '../../../infrastructure/database/prisma.client'
import { UserSource } from '../user.source'

export default class UserRepository implements UserSource {
  constructor(private readonly prisma: PrismaClient) {}

  find(): Promise<User[]> {
    return this.prisma.user.findMany()
  }
}
