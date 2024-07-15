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


    const postplant =(req,res)=>{
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
      }

     const getplants =(req,res)=>{
        res.json({
          successs:true,
          data: plants,
          message:"all plants fetched  successfully" 
        })
      }

     const getplantId = (req,res)=>{
        const {id}=req.params
       const plant =plants.find((p)=>p.id == id  )
         res.json({
         successs:plant ? true : false,
         data: plant ? plant : null,
         message:plant ? " plant fetched  successfully"  : " plant not found"
       })
     }


     const putplantId =(req,res)=>{
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
     }

     const deleteplantID =(req,res)=>{
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
        }


      export {
        postplant ,
        getplants,
        getplantId,
        putplantId,
        deleteplantID
       
      }