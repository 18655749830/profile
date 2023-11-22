const md5password = require('../../utils/password-handle')
const { getUserByName } = require('./service')
const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 3.判断这次注册的用户名是没有被注册过
  const result = await getUserByName(name);
  if(result) return ctx.body =  `用户${name}已经注册`
  await next()
  
}
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password)
  await next();
}

module.exports = {
  verifyUser,
  handlePassword
}