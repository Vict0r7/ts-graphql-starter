import { Inject, Service } from 'typedi'
import { User } from './user.entity'
import { UserSource } from './user.source'

@Service()
export default class UserService {
  constructor(@Inject(UserSource) private readonly userSource: UserSource) {}

  list(): Promise<User[]> {
    return this.userSource.find()
  }
}
