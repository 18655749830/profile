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
}

module.exports = new UserService()