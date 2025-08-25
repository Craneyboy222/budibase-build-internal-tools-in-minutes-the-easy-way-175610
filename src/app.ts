import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Database connected'));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Enterprise App Builder API');
});

export default app;