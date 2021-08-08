import express from 'express'
import { createCourse } from './routes'
//import library

const app = express()
app.get("/", createCourse)
app.listen(3333)
