import { User } from './user.entity'
import { Token } from 'typedi'

export interface UserSource {
  find: () => Promise<User[]>
}

export const UserSource = new Token<UserSource>()
