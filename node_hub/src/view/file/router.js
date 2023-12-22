const Router = require('koa-router')
const multer = require('koa-multer')
const { verifyAuth } = require('../user/middleware.js')

const {
  avatarSave,
  pictureSave,
  getAvatar,
  getPicture
} = require('./controller.js')
const uploadAvatar = multer({ dest: './uploads/avatar' })
const uploadPicture = multer({ dest: './uploads/picture' })

const router = new Router({ prefix: '/upload' })
// 上传图片
router.post('/avatar', verifyAuth, uploadAvatar.single('file'), avatarSave)
router.post('/picture', verifyAuth, uploadPicture.array('file', 9), pictureSave)
// url方式获取图片
router.get('/avatar/:filename', getAvatar)
router.get('/picture/:filename', getPicture)

module.exports = router