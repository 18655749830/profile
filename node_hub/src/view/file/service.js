const connection = require('../../app/database');

class File {
  async createAvatar(filename, mimetype, size, user_id){
    const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?)`;
    const [res] = await connection.execute(statement, [filename, mimetype, size, user_id])
    return res
  }
  async createPicture(filename, mimetype, size, user_id, moment_id){
    const statement = `INSERT INTO picture (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?, ?)`;
    const [res] = await connection.execute(statement, [filename, mimetype, size, user_id, moment_id])
    return res
  }
  async getAvatarByName(filename){
    const statement = `SELECT * FROM avatar WHERE filename = ?`;
    const [res] = await connection.execute(statement, [filename])
    return res
  }
  async getPictureByName(filename){
    const statement = `SELECT * FROM picture WHERE filename = ?`;
    const [res] = await connection.execute(statement, [filename])
    return res
  }
}

module.exports = new File()