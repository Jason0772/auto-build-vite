// server/db.js
import mysql from 'mysql2/promise';

const dbConfig = {
    host: '42.194.197.253', // 数据库主机
    user: 'db_website', // 数据库用户名
    password: 'fBKSssK8hWnzjeKN', // 数据库密码
    database: 'db_website', // 数据库名称
};

// 创建数据库连接的函数
export const getConnection = async () => {
    return await mysql.createConnection(dbConfig);
};
