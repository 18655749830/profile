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
      m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
      JSON_OBJECT('id',u.id,'name',u.NAME,'avatarUrl', u.avatar_url) user,
      IF(COUNT(t.id),JSON_ARRAYAGG(
        JSON_OBJECT('id', t.id, 'name', t.name)
        ), JSON_ARRAY()) tags,
      (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id ) commentCount,
      (SELECT JSON_ARRAYAGG(user_id) 
        FROM moment_praise mp WHERE m.id = mp.moment_id) praises,
      (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:80/upload/picture/', picture.filename)) 
    FROM picture WHERE m.id = picture.moment_id) images
    FROM moment m
    LEFT JOIN USER u ON m.user_id=u.id 
    LEFT JOIN moment_tag mt ON m.id = mt.moment_id
    LEFT JOIN tag t ON mt.tag_id = t.id
    GROUP BY m.id
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
  // 点赞相关
  async getUsersById(momentId) {
    const  statement = `SELECT * FROM moment_praise WHERE moment_id = ?`
    const [res] = await connection.execute(statement, [momentId])
    return res
  }
  async praiseCreate(moment_id, user_id) {
    const  statement = `INSERT INTO moment_praise (moment_id, user_id) VALUES (?,?);`
    const [res] = await connection.execute(statement, [moment_id, user_id])
    return res
  }
  async praiseDelete(moment_id, user_id) {
    const  statement = `DELETE FROM moment_praise WHERE moment_id = ? AND user_id = ?;`
    const [res] = await connection.execute(statement, [moment_id, user_id])
    return res
  }

}

module.exports = new MomentService()