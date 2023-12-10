const Router = require('koa-router')
const { verifyAuth } = require('../user/middleware')
const commentController = require('./controller.js')

const router = new Router({ prefix: '/comment' })
// 评论添加/编辑
router.post('/edit', verifyAuth, commentController.create)
// 评论 对评论回复评论
router.post('/reply', verifyAuth, commentController.reply)
// 评论列表
router.post('/list', commentController.list)
// 评论详情 
router.post('/del', verifyAuth, commentController.delete)


module.exports = router