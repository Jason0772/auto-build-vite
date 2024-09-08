// server/api/init.js
import { getConnection } from '../mysql_db.js';

export default defineEventHandler(async (event) => {
  const connection = await getConnection();
  
  try {
    // 创建 users 表的 SQL 语句
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
      )
    `;

    // 执行创建表的 SQL 语句
    await connection.execute(createTableQuery);

    return { message: 'Users table created successfully' };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to create users table' };
  } finally {
    await connection.end();
  }
});
