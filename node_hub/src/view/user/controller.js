class UserController {
  async create(ctx) {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
  }
}

module.exports = new UserController()