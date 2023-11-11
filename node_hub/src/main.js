const app = require('./app')
const config = require('./app/config.js')

app.listen(config.APP_PORT, () => {
  console.log(`端口${config.APP_PORT}服务已经启动～～`);
})
