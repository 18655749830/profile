const Router = require('koa-router')
const {
  create
} = require('../view/user/controller.js')
// const useRouter = new Router({prefix: './users'})
const router = new Router()


router.post('/user', create)
// router.post('/user', async (ctx) => {
//   ctx.type = 'html';
//   ctx.body = '<h1>hello world!</h1>';
// })

module.exports = router
