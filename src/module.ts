import Container from 'typedi'
import { UserSource } from './components/user/user.source'
import UserRepository from './components/user/adapters/user.repository'
import PrismaClient from './infrastructure/database/prisma.client'

const prisma = new PrismaClient()
Container.set(UserSource, new UserRepository(prisma))
