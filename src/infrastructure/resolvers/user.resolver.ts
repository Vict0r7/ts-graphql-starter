import { Service } from 'typedi'
import { ObjectType, Field, ID, Query, Resolver } from 'type-graphql'
import UserService from '../../components/user/user.service'

@Service()
@Resolver(() => UserResolver)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserQL])
  async users(): Promise<UserQL[]> {
    return this.userService.list()
  }
}

@ObjectType()
class UserQL {
  @Field(() => ID)
  id: number

  @Field(() => String)
  name: string

  @Field(() => String)
  email: string
}
