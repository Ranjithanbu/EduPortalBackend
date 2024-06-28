import { users } from "../Models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const signUp=async(req,res)=>{

const {userName,email,password}=req.body
    try {
   if(!userName||!email||!password){
    return res.status(200).json({message:'all fields are required'})
   } 
const nameExisted=await users.find({userName})
const mailExisted=await users.find({email})

if(!nameExisted.length<1){
    return res.status(200).json({message:'userName alredy existed'})
}
if(!mailExisted.length<1){
    return res.status(200).json({message:'email alredy existed'})
}
const hashedPassword=bcrypt.hashSync(password,10)
const saveUser=new users({userName,email,password:hashedPassword})
await saveUser.save()

res.status(200).json({message:'SignUp success',data:saveUser})
} catch (error) {
    
res.status(500).json({message:error.message})
}
}

export const login=async(req,res)=>{
const {userName,password}=req.body
    try {
        const userExist=await users.find({userName})

        if(!userName||!password){
        return res.status(200).json({message:'all feilds are required'})
    }
if(userExist.length<1){
    return res.status(200).json({message:'user not found'})
}

const comparePassword=bcrypt.compareSync(password,userExist[0].password)
if(!comparePassword){
    return res.status(200).json({message:'incorrect password'})
}

 const fData=await users.findById(userExist[0]._id).select('-_id -__v -password -email')
const token=await jwt.sign({_id:userExist._id},process.env.secret,{expiresIn:'1hr'})


res.status(200).cookie('token',token,{
    httpOnly:true,
    sameSite:'none',
    expires:new Date(Date.now()+24*60*60*1000),
    secure:true


}).json({message:'login success',data:fData})
} catch (error) {
 
    res.status(500).json({message:error.message})
}
}