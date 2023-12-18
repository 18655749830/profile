const connection = require('../../app/database')

class CommentService {
  async create(momentId, content, userId) {
    // INSERT INTO comment (content, moment_id, user_id) VALUES ('C++才是世界上最好的语言', 3, 2);
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`
    try {
      const [result] = await connection.execute(statement, [content, momentId, userId])
      return result
    } catch (error) {
      return error
    }
  }
  async reply(momentId, content, userId, commentId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, momentId, userId, commentId]);
    return result;
  }
  async list(id, offset="0", size="1000") {
    let statement = `
      SELECT c.content, c.id, c.moment_id, c.comment_id,
        JSON_OBJECT('id', u.id,'name', u.name) user
      FROM comment c
      LEFT JOIN user u ON u.id = c.user_id
      WHERE c.moment_id = ?;
    `
    // if(id){
    //    statement = `SELECT content,id FROM comment WHERE moment_id = ?;`
    // }else{
    //    statement = `SELECT content,id FROM comment LIMIT ?,?;`
    // }
    try {
      const [result] = await connection.execute(statement, [id])
      return result
    } catch (error) {
      return error
    }
  }
  async edit(id, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [content, id])
    return result
  }
  async del(id){
    const statement = `DELETE FROM comment WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new CommentService()
