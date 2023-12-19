const userRouter = require('../view/user/router')
const momentRouter = require('../view/moment/router')
const commentRouter = require('../view/comment/router')
const tagRouter = require('../view/tag/router')
const fs = require('fs')
const path = require('path')

const routePath = path.join(__dirname, '../view')
const filePaths = fs.readdirSync(routePath)


const useRoutes = function() {
  filePaths.forEach(file => {
    if(file === '.DS_Store') return
    const router = require(`../view/${file}/router`)
    this.use(router.routes());
    this.use(router.allowedMethods());
  })
  // this.use(userRouter.routes());
  // this.use(userRouter.allowedMethods());

  // this.use(momentRouter.routes());
  // this.use(momentRouter.allowedMethods());

  // this.use(commentRouter.routes());
  // this.use(commentRouter.allowedMethods());

  // this.use(tagRouter.routes());
  // this.use(tagRouter.allowedMethods());
}
// const useRoutes = function() {
//   fs.readdirSync(__dirname).forEach(file => {
//     if (file === 'index.js') return;
//     const router = require(`./${file}`);
//     this.use(router.routes());
//     this.use(router.allowedMethods());
//   })
// }

module.exports = useRoutes;