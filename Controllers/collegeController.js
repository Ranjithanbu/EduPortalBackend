import { colleges } from "../Models/collegeModel.js"


export const addColleges=async(req,res)=>{

const {collegeType,college,courses,location,officialWebsite,image,details}=req.body    
if(!collegeType||!college||!courses||!location||!officialWebsite||!image||!details){
  return  res.status(200).json({message:'all feilds are important'})
}    

try {
        
let saveData=colleges({collegeType,college,courses,location,officialWebsite,image,details})
saveData.save()
res.status(200).json({message:"data saved successfully"})
    } catch (error) {
        
res.status(404).json({message:error.message})

    }
}

export const getAllData=async(req,res)=>{

    try {
        
let allData=await colleges.find()
res.status(200).json({message:'data fetched success',data:allData})
} catch (error) {
        
    res.status(404).json({message:error.message})

    }
}

export const getOneData=async(req,res)=>{
    
const {id}=req.params    
    try {
        
       const findData=await colleges.findById(id) 
   
  res.status(200).json({message:'details fetched success',data:findData})     
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}