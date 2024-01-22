import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

dotenv.config()

import { port } from './config/config';

import './database/database'

import userRoute from './routes/user.routes';
import roleRoute from './routes/role.routes';
import categoryRoute from './routes/category.routes';
import countryRoute from './routes/country.routes';
import experienceRoute from './routes/experience.routes';
import languageRoute from './routes/language.routes';

const app = express()

app.set('port', port)

if(process.env.NODE_DEV !== 'production') {
    app.use(morgan('dev'))
    app.use(cors({
        credentials: true,
        origin: "*"
    }))
} else {
    app.use(morgan('combined'))
    app.use(cors({
        credentials: true,
        origin: "*"
    }))
}

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(express.static(path.join(__dirname, "../public")))

app.use(userRoute)
app.use(roleRoute)
app.use(categoryRoute)
app.use(countryRoute)
app.use(experienceRoute)
app.use(languageRoute)

app.listen(app.get('port'), () => {
    console.log("Server is running on port " + app.get('port'));
})
