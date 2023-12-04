const userRouter = require('../view/user/router')
const momentRouter = require('../view/moment/router')

const useRoutes = function() {
  this.use(userRouter.routes());
  this.use(userRouter.allowedMethods());

  this.use(momentRouter.routes());
  this.use(momentRouter.allowedMethods());
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