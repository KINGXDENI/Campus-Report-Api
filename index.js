import express from 'express';
import cors from 'cors';
import connectDB from './config/Database.js';
// import reportRoutes from './routes/ReportRoute.js';
// import likeRoutes from './routes/LikeRoute.js';
// import searchRoutes from './routes/SearchRoute.js';
import userRoutes from './routes/UserRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// app.use(reportRoutes);
// app.use(likeRoutes);
// app.use(searchRoutes);
app.use(userRoutes);

connectDB();

app.listen(process.env.PORT, () => console.log('Server is running...'));
