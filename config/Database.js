import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {
  MONGO_URI
} = process.env;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default db;
