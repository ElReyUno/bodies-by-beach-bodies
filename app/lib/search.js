import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';

const uri = process.env.MONGODB_URI;    // Set MongoDB URI in .env
const client = new MongoClient(uri);

export async function searchDatabase(query) {
    try {
        await client.connect();
        const database = client.db('bbbb'); // Database name
        const collection = database.collection('bbbbCollection'); // Replace with your collection name

        const results = await collection.find({ $text: { $search: query } }).toArray();
        return results;
    } finally {
        await client.close();
    }
}

async function populateDatabase() {
    try {
        await client.connect();
        const database = client.db('bbbb'); // Database name
        const collection = database.collection('bbbbCollection'); // Collection name

        const dataPath = path.join(__dirname, 'data.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

        await collection.insertMany(data);
        console.log('Database populated successfully');
    } finally {
        await client.close();
    }
}

populateDatabase().catch(console.error);