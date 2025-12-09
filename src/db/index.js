import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInstant = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log("BD Connected!!")
    } catch (error) {
        console.log("MongoDB connection error! ", error);
        process.exit(1);
    }
}

export default connectDB