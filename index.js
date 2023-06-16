import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import ReportRoute from './routes/ReportRoute.js';
// import LikeRoute from './routes/LikeRoute.js';
// import SearchRoute from './routes/SearchRoute.js';
import UserRoutes from './routes/UserRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
// app.use(ReportRoute);
// app.use(LikeRoute);
// app.use(SearchRoute);
app.use(UserRoutes);

const {
  MONGODB_URI,
  PORT
} = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});