const tagService = require('./service')

class tagController {
  async create(ctx) {
    const { name } = ctx.request.body
    try {
      const result = await tagService.create(name)
      return ctx.body = result
    } catch (error) {
      return ctx.body = error
    }
  }
  async list(ctx) {
    // const { content } = ctx.request.body
    const result = await tagService.list()
    return ctx.body = result
  }

}

module.exports = new tagController()
