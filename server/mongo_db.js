import { MongoClient } from 'mongodb';


const dbName = 'fast_website'; // 替换为你的数据库名称
const uri = `mongodb://fast_website:hbjCshSW23EwZBMW@42.194.197.253:27017/${dbName}`; // MongoDB 连接字符串
// const uri = 'mongodb://42.194.197.253:27017'; // MongoDB 连接字符串

const client = new MongoClient(uri);

export const connectToDatabase = async () => {
    console.log('Attempting to connect to the database...');
    try {
      await client.connect();
      console.log('Connected to the database');
      return client.db(dbName);
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  };
