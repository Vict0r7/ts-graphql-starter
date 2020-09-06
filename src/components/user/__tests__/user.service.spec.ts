import UserService from '../user.service'
import { User } from '../user.entity'
import { UserSource } from '../user.source'

describe('UserService', () => {
  describe('list', () => {
    it('should return a list of users', async () => {
      // Given
      const user: User = { id: 1, name: 'Bob', email: 'bob@email.io' }
      const userSource: UserSource = {
        find: () => Promise.resolve([user]),
      }
      const userService = new UserService(userSource)

      // When
      const result = await userService.list()

      // Then
      expect(result).toEqual([user])
    })
  })
})
