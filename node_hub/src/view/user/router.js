const Router = require('koa-router')
const {
  create,
  list
} = require('./controller.js')
const { verifyUser, handlePassword, verifyLogin, verifyAuth } = require('./middleware.js')
// const useRouter = new Router({prefix: './users'})
const router = new Router()


router.post('/user', verifyUser, handlePassword, create)
router.post('/login', verifyLogin)
router.post('/user/list', verifyAuth, list)

router.post('/test', verifyAuth)

module.exports = router