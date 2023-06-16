import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoutes from './routes/UserRoute.js';
import db from './config/Database.js'; // Tambahkan baris ini

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.use(UserRoutes);

const {
  PORT
} = process.env;

db.once('open', () => { // Ubah dari mongoose.connection menjadi db.once
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
