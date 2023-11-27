
const errorHandler = (error, ctx) => {
  let status, message

  switch (error.message) {
    case 'name_or_password_is_required':
      status = 400 // Bad Request
      message = "用户名或者密码不能为空~"
      break;
    case 'user_is_nothing':
      status = 400
      message = '用户不存在，请先注册该用户'
      break
    case 'name_or_password_is_error':
      status = 400
      message = '账号或者密码输入错误'
      break
    default:
      status = 404
      message = "NOT FOUND"
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
