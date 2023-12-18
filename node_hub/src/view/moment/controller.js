const momentService = require('./service')
const tagService = require('../tag/service')

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
  async tags(ctx) {
    const { momentId, names } = ctx.request.body

    // 取标签并判断标签表中是否存在
    const tagArr = []
    for(const name of names){
      const [tagObj] = await tagService.getTagByName(name)
      if(tagObj && tagObj.id){
        // 标签存在
        tagArr.push({id: tagObj.id,name})
      }else{
        // 标签不存在
        const tagObj = await tagService.create(name)
        tagArr.push({id: tagObj.insertId, name})
      }
    }

    // 准备添加标签 并判断改动态是否存在与此标签

    // 添加
    for(const tag of tagArr){
      console.log(tag);
      const res = await momentService.tagsToMoment(momentId, tag.id)
      console.log(res);
    }

    // 添加成功
    ctx.body = `动态Id：${momentId}成功添加标签${tagArr.map(i=>i.name).join(',')}`
  }
}

module.exports = new MomentController()