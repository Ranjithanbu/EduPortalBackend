import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,

    }
})

export const users=mongoose.model('user',userSchema)