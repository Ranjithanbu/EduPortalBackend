import express from 'express'
import { addColleges, getAllData, getOneData } from '../Controllers/collegeController.js'

export const collegeRoute=express.Router()

collegeRoute.post('/addCollege',addColleges)
collegeRoute.get('/getAllData',getAllData)
collegeRoute.get('/getOne/:id',getOneData)
