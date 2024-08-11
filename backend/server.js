// // server.js->signup
// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();

// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// server.js->login
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/Ldb.js';
import authRoutes from './routes/LauthRoutes.js';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

