const momentService = require('./service')

class MomentController {
  async create(ctx) {
    // 获取数据（user_id, content）(img)
    const { user } = ctx
    const { content, id } = ctx.request.body

    // 将数据更新至数据库
    if (id) {
      
      const detail = await momentService.detail(id)
      if(detail.user.id !== user.id){
        return ctx.throw(400, '修改人和发布人不一致');
      }
      const result = await momentService.edit(id, content)
      ctx.body = result
    } else {
      const result = await momentService.create(user.id, content)
      ctx.body = result
    }
  }
  async list(ctx, next) {
    // 1.获取数据(offset/size)
    // return ctx.throw(401, 'name access_denied', { user: '13123' })
    const { offset, size } = ctx.query
    // 2.查询列表
    const result = await momentService.getMomentList(offset, size)
    ctx.body = result
  }
  async detail(ctx, next){
    // 根据id获取详情
    // query、params、request.body
    const id = ctx.params.id
    const result = await momentService.detail(id)

    ctx.body = result
  }
}

module.exports = new MomentController()