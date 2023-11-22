const UserService = require('./service')

class UserController {
  async create(ctx) {
    const user = ctx.request.body
    const result = await UserService.create(user)
    ctx.body = result
  }
}

module.exports = new UserController()