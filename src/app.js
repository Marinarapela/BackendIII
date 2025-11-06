import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import setupSwagger from "./config/swagger.js";

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import config from './config/config.js';

import middLogg from "./config/logger.js";

const app = express();

mongoose.connect(config.MONGO_URL, {
    dbName: config.DB_NAME,
}).then(()=>{
    console.log ("MongoDB connected")
    console.log (`Mode: ${config.MODE}`)
})
.catch((err)=> console.error(err))

app.use(express.json());
app.use(cookieParser());
app.use(middLogg);

setupSwagger(app);

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);

app.get('/', (req, res) => {
    const style = `
        <style>
            body { font-family: Arial, sans-serif; }
            h1 { color: #333; }
            p { color: #555; }
        </style>
    `;
    const content = `
        <h1>Welcome to the AdoptMe API</h1>
        <p>Use the endpoints to manage users, pets, adoptions, and sessions.</p>
    `;
    res.send(`${style}${content}`);
});


export const server = app.listen(config.PORT,()=>{
    console.log(`Server is running on port http://localhost:${config.PORT}`);
});

export default app;