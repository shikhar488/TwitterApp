import mongoose from 'mongoose'
import { MONGO_URL } from './serverConfig.js';

export default async function connectDb() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
    }
}