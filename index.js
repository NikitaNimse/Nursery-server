import express from 'express';
import dotenv  from 'dotenv';
dotenv.config()

const app =express()
app.use(express.json())


// this is temperory db
const plants = [
  {
    "id": 5,
    "name": "Bamboo",
    "category": "indoor",
    "image": " https://rukminim2.flixcart.com/image/850/1000/plant-seed/h/h/b/1-gp002-green-plant-indoor-original-imaeqkksfkthtuyn.jpeg?q=90&crop=false",
    "price": "150",
    "description": "3 layer lucky bamboo in a glass vase"
},
{
  "id": 2,
  "name": "pink rose",
  "category": "indoor",
  "image": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOD_CTsUHnnBBPmunWUTNnvXdzhkSepS0ESA&s",
  "price": "200",
  "description": "beautiful pink rose plant"
},
{
  "id": 8,
  "name": "Mango",
  "category": "outdoor",
  "image": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOD_CTsUHnnBBPmunWUTNnvXdzhkSepS0ESA&s",
  "price": "100",
  "description": "Mango plant"
}
]

app.post("/plant" ,(req,res)=>{
  const {
      name ,
     category ,
      image ,
      price , 
      description} = req.body

      if(!name){
        res.json({
          success:false,
          Data:null,
          message:"name is Required"

        })
      }
      if(!category){
        res.json({
          success:false,
          Data:null,
          message:"categoryis Required"

        })
      }
      if(!image){
        res.json({
          success:false,
          Data:null,
          message:"image is Required"

        })
      }
      if(!price){
        res.json({
          success:false,
          Data:null,
          message:"price is Required"

        })
      }
      if(!description){
        res.json({
          success:false,
          Data:null,
          message:"description is Required"

        })
      }
      const randomId = Math.round(Math.random() * 10000)

      const newplant ={
        id:randomId,
        name:name,
        category:category,
        image:image,
        price:price,
        description:description
      }

    plants.push(newplant)
      res.json({
        successs:true,
        data: newplant,
        message:"new plant added successfilly" 
      })
})


app.get("/plants" ,(req,res)=>{
  res.json({
    successs:true,
    data: plants,
    message:"all plants fetched  successfully" 
  })
})

app.get("/plant/:id" ,(req,res)=>{
   


   const plant =plants.find((p)=>p.id == id  )
  
   
   res.json({
    successs:plant ? true : false,
    data: plant ? plant : null,
    message:plant ? " plant fetched  successfully"  : " plant not found"
  })
})

app.put("/plant/:id" ,(req,res)=>{
  const {
    name ,
   category ,
    image ,
    price , 
    description} = req.body

   const {id} = req.params

  let index = -1
  plants.forEach((plant ,i)=>{
    if(plant.id == id){
      index = i
    }
  })
  const newobj = {
    id,
    name,
    category,
    image,
    price, 
    description
  }
  if(index ==-1){
    return  res.json({
      successs:false,
      data: null,
      message:`plant not found for id ${id}`
    })
 }
  else{
    plants[index] = newobj
    return    res.json({
      successs:true,
      data: newobj,
      message:"plant updated successfully"
    })
  }

})

app.delete("/plant/:id" ,(req,res)=>{
  const {id} = req.params
  let index = -1
  plants.forEach((plant ,i)=>{
    if(plant.id == id){
      index = i
    }
  })

 if(index==-1){
    return res.json({
      successs:false,
      data: null,
      message:`plant not found with id ${id}`
    })
    
  }

  plants.splice(index,1)

res.json({
      successs:true,
      data: null,
      message:"plant deleted successfully"
    })
  })





const PORT = process.env.PORT;
app.listen(PORT,()=>{{}
console.log(`Server is running on port ${PORT}`)
})