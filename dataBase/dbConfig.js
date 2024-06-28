import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config() 
const connectDb=()=>{
    try {
        mongoose.connect(process.env.mongoUrl)
        console.log('Db connected succesfully');

    } catch (error) {
        console.log(error)

    }

}

export default connectDb