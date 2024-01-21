import { MongoClient, ServerApiVersion } from 'mongodb';
const URI = process.env.MONGODB_URI || 'MOCK_MONGODB_URI';

declare global {
    var mongodb: MongoClient | undefined;
}

const mongodb =
    global.mongodb ||
    new MongoClient(URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

if (process.env.NODE_ENV === 'development') {
    global.mongodb = mongodb;
}

export default mongodb;
