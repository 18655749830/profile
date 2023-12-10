const userRouter = require('../view/user/router')
const momentRouter = require('../view/moment/router')
const commentRouter = require('../view/comment/router')


const useRoutes = function() {
  this.use(userRouter.routes());
  this.use(userRouter.allowedMethods());

  this.use(momentRouter.routes());
  this.use(momentRouter.allowedMethods());

  this.use(commentRouter.routes());
  this.use(commentRouter.allowedMethods());
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