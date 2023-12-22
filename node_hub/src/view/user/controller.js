const UserService = require('./service')

class UserController {
  async create(ctx) {
    const user = ctx.request.body
    const result = await UserService.create(user)
    ctx.body = result
  }
  async list(ctx) {
    const { rows, page } = ctx.request.body
    const offset = page - 1 + ''
    try {
      const result = await UserService.list(offset, rows)
      ctx.body = result
    } catch (error) {
      ctx.body = error
    }
  }
}

module.exports = new UserController()