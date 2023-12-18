const app = require('./app')
const config = require('./app/config.js')

require('./app/database.js')

app.listen(config.APP_PORT, () => {
  console.log(`端口${config.APP_PORT}～～`);
})
