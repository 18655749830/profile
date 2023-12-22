const fs = require('fs');
const fileService = require('./service')
const userService = require('../user/service')
const { APP_HOST, APP_PORT } = require('../../app/config')
const { AVATAR_PATH, PICTURE_PATH } = require('../../app/constants')

class FileController {
  async avatarSave(ctx) {
    const { id } = ctx.user
    const { filename, mimetype, size } = ctx.req.file

    // 将数据保存至数据库中
    try {
      await fileService.createAvatar(filename, mimetype, size, id)
    } catch (error) {
      return ctx.body = error
    }

    // 将数据储存为url
    const avatarUrl = `${APP_HOST}:${APP_PORT}/upload/avatar/${filename}`
    await userService.updateAvatar(id, avatarUrl)

    ctx.body = '上传头像成功~'
  }
  async pictureSave(ctx){
    const { id } = ctx.user
    const { momentId } = ctx.query
    const files = ctx.req.files
    for(let file of files){
      const { filename, mimetype, size } = file
      await fileService.createPicture(filename, mimetype, size, id, momentId)
    }
    ctx.body = '动态配图上传完成~'

  }
  async getAvatar(ctx) {
    const { filename } = ctx.params
    const avatarInfo = await fileService.getAvatarByName(filename)

    // 2.提供图像信息
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${filename}`)
  }
  async getPicture(ctx) {
    const { filename } = ctx.params
    const pictureInfo = await fileService.getPictureByName(filename)

    // 2.提供图像信息
    ctx.response.set('content-type', pictureInfo.mimetype)
    ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`)
  }
  
}

module.exports = new FileController()