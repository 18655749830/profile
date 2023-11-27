const md5password = require('../../utils/password-handle')
const { getUserByName } = require('./service')
const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 3.判断这次注册的用户名是没有被注册过
  const result = await getUserByName(name)
  if (result) return ctx.body = `用户${name}已经注册`
  await next()

}
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}

// 校验登录
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if( !name || !password ){
    const error = new Error('name_or_password_is_required');
    return ctx.app.emit('error', error, ctx);
  }
  const user = await getUserByName(name)
  if (!user){
    const error = new Error('user_is_nothing');
    return ctx.app.emit('error', error, ctx);
  } 
  if(user.password !== md5password(password) ){
    const error = new Error('name_or_password_is_error');
    return ctx.app.emit('error', error, ctx);
  }
  ctx.body = "登录成功"


  await next()
}

module.exports = {
  verifyUser,
  handlePassword,
  verifyLogin
}