import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

import { port } from './config/config';

import './database/database'

import userRoute from './routes/user.routes';

const app = express()

app.set('port', port)

app.use(userRoute)

app.listen(app.get('port'), () => {
    console.log("Server running on port " + app.get('port'));
})