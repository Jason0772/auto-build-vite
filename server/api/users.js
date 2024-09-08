import { getConnection } from '../mysql_db.js';

export default defineEventHandler(async (event) => {
  const connection = await getConnection();
  
  try {
    const method = event.node.req.method;

    if (method === 'GET') {
      // 查询所有用户
      const [rows] = await connection.execute('SELECT * FROM users');
      return rows;
    } else if (method === 'POST') {
      // 添加用户
      const body = await readBody(event);
      const { name, email } = body;
      const [result] = await connection.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
      return { id: result.insertId, name, email };
    } else if (method === 'PUT') {
      // 编辑用户
      const body = await readBody(event);
      const { id, name, email } = body;
      await connection.execute('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
      return { message: 'User updated successfully' };
    } else if (method === 'DELETE') {
      // 删除用户
      const { id } = await readBody(event);
      await connection.execute('DELETE FROM users WHERE id = ?', [id]);
      return { message: 'User deleted successfully' };
    } else {
      return { error: 'Method not allowed' };
    }
  } catch (error) {
    console.error(error);
    return { error: 'Database query failed' };
  } finally {
    await connection.end();
  }
});
