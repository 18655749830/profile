const Router = require('koa-router')
const { verifyAuth } = require('../user/middleware')
const tagController = require('./controller.js')

const router = new Router({ prefix: '/tag' })
// 评论添加/编辑
router.post('/', verifyAuth, tagController.create)
// 评论列表
router.get('/', tagController.list)


module.exports = router