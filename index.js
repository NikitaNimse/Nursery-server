import express from 'express';
import dotenv  from 'dotenv';
import { getHealth } from './controllers/health.js  ';
import { postplant ,getplants,getplantId ,putplantId,deleteplantID} from './controllers/plant.js';
import  {handlepagenotfound } from './controllers/errors.js'
dotenv.config()

const app =express()
app.use(express.json())


// this is temperory db
const plants = [

{
  "id": 9528,
  "name": "pink rose",
  "category": "indoor",
  "image": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOD_CTsUHnnBBPmunWUTNnvXdzhkSepS0ESA&s",
  "price": "200",
  "description": "beautiful pink rose plant"
},
{
  "name": "Jasmin",
   "category": "outdoor",
   "image": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzEojJpKuqPdSbrsSAkVE0yCRDDVJdEWaUw&s",
   "price": "60",
   "description": "planty of beautiful flower plant"  
}

]

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