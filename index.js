import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './dataBase/dbConfig.js';
import { userRoutes } from './Routers/useRoute.js';
import { collegeRoute } from './Routers/collegeRoute.js';
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
connectDb()

app.use('/users',userRoutes)
app.use('/colleges',collegeRoute)
app.listen(process.env.port,()=>{
    console.log(`i am listening on the port -`,process.env.port);
})

