const commentService = require('./service')
const { authMyself } = require('./middleware') 

class CommentController {
  async create(ctx, next) {
    const { momentId, content, id } = ctx.request.body
    const userId = ctx.user.id
    if(id){
      const flagMyself = await authMyself(id, userId)
      if(!flagMyself) return ctx.throw(400, '修改人和发布人不一致');
      const result = await commentService.edit(id, content)
      return ctx.body = result
    }else{
      const result = await commentService.create(momentId, content, userId)
      return ctx.body = result
    }
  }
  async reply(ctx){
    const { momentId, content, id } = ctx.request.body
    const userId = ctx.user.id
    const result = await commentService.reply(momentId, content, userId, id)
    return ctx.body = result
  }
  async list(ctx){
    const { offset, size } = ctx.request.body
    const result = await commentService.list(offset, size)
    return ctx.body = result
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body
    const userId = ctx.user.id
    const flagMyself = await authMyself(id, userId)
    if(!flagMyself) return ctx.throw(400, '修改人和发布人不一致');
    const result = await commentService.del(id)
    return ctx.body = result
  }
}

module.exports = new CommentController()

