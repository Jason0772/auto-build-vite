import { connectToDatabase } from '../mongo_db.js';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const booksCollection = db.collection('books');

  const method = event.node.req.method;

  if (method === 'GET') {
    // 查询所有书籍
    const books = await booksCollection.find({}).toArray();
    return books;
  } else if (method === 'POST') {
    // 添加书籍
    const body = await readBody(event);
    const { name, price } = body;
    const result = await booksCollection.insertOne({ name, price });
    return { id: result.insertedId, name, price };
  } else if (method === 'PUT') {
    // 编辑书籍
    const body = await readBody(event);
    const { id, name, price } = body;
    await booksCollection.updateOne({ _id: new ObjectId(id) }, { $set: { name, price } });
    return { message: 'Book updated successfully' };
  } else if (method === 'DELETE') {
    // 删除书籍
    const { id } = await readBody(event);
    await booksCollection.deleteOne({ _id: new ObjectId(id) });
    return { message: 'Book deleted successfully' };
  } else {
    return { error: 'Method not allowed' };
  }
});
