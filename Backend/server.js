const express = require("express")
const notes=require("./data/notes")
const dummydata=require("./data/dummydata")

const dotenv =require('dotenv')
const app=express()    //making object
dotenv.config()                 

app.get("/",(req,res)=>               //API end-point
{
  res.send("API is running..")
} ) 

app.get("/api/notes",(req,res)=>
{
 res.json(notes)

} 
)   
app.get("/api/dummydata",(req,res)=>
{
    res.send(dummydata)
    //res.send("The dummy data is working")
})   
app.get("/api/notes/:id",(req,res)=>
{
    const note = notes.find((n)=>n._id===req.params.id)
    res.send(note)

}) 
const PORT=process.env.PORT||5000                    

app.listen(PORT,console.log("server started at port ${PORT}"))