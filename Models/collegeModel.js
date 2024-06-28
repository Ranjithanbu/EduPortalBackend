import  mongoose  from "mongoose";
const collegeSchema=mongoose.Schema({

    collegeType:String,
    college:String,
    courses:Object,
    location:String,
    officialWebsite:String||Array,
    image:String||Array,
    details:String


})

export const colleges=mongoose.model('college',collegeSchema)