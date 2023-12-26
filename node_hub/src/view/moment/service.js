const connection = require('../../app/database')

class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`
    const [result] = await connection.execute(statement, [content, userId])
    return result
  }
  async edit(id, content) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [content, id])
    return result
  }
  async getMomentList(offset='0', size='10') {
    const statement = `
      SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user
      FROM moment m
      LEFT JOIN user u ON m.user_id = u.id
      LIMIT ?, ?;
    `
    const [result] = await connection.execute(statement, [offset, size])
    return result
  }
  async detail(id) {
    const statement = `
      SELECT 
        m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.NAME) user,
        IF(COUNT(t.id),JSON_ARRAYAGG(
          JSON_OBJECT('id', t.id, 'name', t.name)
        ), JSON_ARRAY()) tags,
        (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id ) commentCount,
        (SELECT COUNT(*) FROM moment_tag mt WHERE mt.moment_id = m.id ) tagCount,
        (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:80/upload/picture/', picture.filename)) 
        FROM picture WHERE m.id = picture.moment_id) images
      FROM moment m
      LEFT JOIN USER u ON m.user_id=u.id 
      LEFT JOIN moment_tag mt ON m.id = mt.moment_id
      LEFT JOIN tag t ON mt.tag_id = t.id
      WHERE m.id=?
      GROUP BY m.id;
    `
    try {
      const [result] = await connection.execute(statement, [id])
      return result[0]
    } catch (error) {
      return error
    }
  }
  async tagsToMoment(momentId, tagId) {
    const statement = `INSERT INTO moment_tag (moment_id, tag_id) VALUES (?, ?);`
    const [result] = await connection.execute(statement, [momentId, tagId])
    return result
  }

}

module.exports = new MomentService()