import express from 'express'
import dotenv  from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import cors from 'cors'

import { getHealth } from './controllers/health.js'
import { postplant ,
    getplants,
    getplantId ,
    putplantId,
    deleteplantID}
 from './controllers/plant.js'
import  {handlepagenotfound } from './controllers/errors.js';

const app =express()
app.use(cors())
app.use(express.json())

const dbconnection =async()=>{

  const conn =  await mongoose.connect(process.env.MONGO_URL)
  if(conn){
    console.log("MongoDB connected 📦")
  }
  else{
    console.log("MongoDB  Not connected ❌")
  }
}
dbconnection();

app.get("/health", getHealth)


app.post("/plant",postplant)

app.get("/plants",getplants )

app.get("/plant/:id" ,getplantId)

app.put("/plant/:id" ,putplantId)

app.delete("/plant/:id" ,deleteplantID)


app.use("*",handlepagenotfound)



const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{{}
console.log(`Server is running on port ${PORT}`)
})