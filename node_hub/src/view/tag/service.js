const connection = require('../../app/database')

class TagService {
  async create(name) {
    const  statement = `INSERT INTO tag (name) VALUES (?);`
    const [res] = await connection.execute(statement, [name])
    return res
  }
  async getTagByName(name) {
    const  statement = `SELECT * FROM tag WHERE name = ?`
    const [res] = await connection.execute(statement, [name])
    return res
  }
  async list() {
    const  statement = `SELECT * FROM tag`
    const [res] = await connection.execute(statement, [])
    return res
  }
}

module.exports = new TagService()
