import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './database/database.js';



// import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';


const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(taskRoutes);

export default app;
