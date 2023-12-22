const connection = require('../../app/database');

class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
    const result = await connection.execute(statement, [name, password]);

    return result[0];
  }
  async getUserByName(name){
    const startment = `SELECT * FROM user WHERE name = ?;`
    const result = await connection.execute(startment, [name]);
    return result[0][0]
  }
  async list(offset = '0', size='10'){
    const startment = `SELECT * FROM user LIMIT ?, ?;`
    const result = await connection.execute(startment, [offset, size]);
    return result[0]
  }
  async updateAvatar(id, url){
    const startment = `UPDATE user SET avatar_url = ? WHERE id = ?;`
    const result = await connection.execute(startment, [url, id]);
    return result[0]
  }
}

module.exports = new UserService()