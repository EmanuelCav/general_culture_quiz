import mongoose from 'mongoose';

import { mongo_url } from '../config/config';

(async () => {

    try {
        
        const connection = await mongoose.connect(`${mongo_url}`)

        if(connection.STATES.connected) {
            console.log("Database is working");
        }

    } catch (error) {
        console.log(error);
    }


})()