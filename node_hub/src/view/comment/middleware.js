const connection = require('../../app/database')

const authMyself = async (commentId, userId) => {
  console.log('----', commentId, userId)
  const statement = `SELECT * FROM comment WHERE id = ? AND user_id = ?;`
  const [result] = await connection.execute(statement, [commentId, userId])
  return result.length === 0 ? false : true

}

module.exports = {
  authMyself
}
