const Router = require('koa-router')
const {
  create
} = require('./controller.js')
const { verifyUser, handlePassword, verifyLogin } = require('./middleware.js')
// const useRouter = new Router({prefix: './users'})
const router = new Router()


router.post('/user', verifyUser, handlePassword, create)
router.post('/login', verifyLogin)

module.exports = router