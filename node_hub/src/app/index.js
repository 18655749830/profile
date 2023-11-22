const Koa = require('koa')
const app = new Koa()

const bodyParser = require('koa-bodyparser')
const useRoutes = require('../router/index.js')

app.use(bodyParser());
app.useRoutes = useRoutes
app.useRoutes();
// app.use(router.routes())
// app.use(router.allowedMethods({}))

// 调用bodyParser解析入参
// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method 

module.exports = app