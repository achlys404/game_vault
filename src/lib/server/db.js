import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
const db = client.db('GameVault');

export default db;