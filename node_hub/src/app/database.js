// 导入模块
const mysql = require('mysql2');

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  database: 'niannian',
  password: 'niannian885521..'
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
  // enableKeepAlive: true,
  // keepAliveInitialDelay: 0
});

// For pool initialization, see above
pool.getConnection(function(err, conn) {
  // Do something with the connection
  conn.connect((err)=>{
    if(err){
      console.log('连接失败：', err);
    }else{
      console.log('数据库连接成功');
    }
  })
  return
  conn.query(/* ... */);
  // Don't forget to release the connection when finished!
  pool.releaseConnection(conn);
});

module.exports = pool.promise()