const Router = require('koa-router')
const { verifyAuth } = require('../user/middleware')
const momentController = require('./controller')

const router = new Router({prefix: '/moment'})
// 动态添加/编辑
router.post('/edit', verifyAuth, momentController.create)
// 动态列表
router.get('/list', verifyAuth, momentController.list)
// 动态详情 
router.get('/detail/:id', momentController.detail)

// 动态添加标签
router.post('/tag/add',verifyAuth, momentController.tags)


module.exports = router