const Koa = require('koa');
const app = new Koa();

const router = require('../router/index.js')

// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method 
app.use(router.routes())
app.use(router.allowedMethods({}))

module.exports = app