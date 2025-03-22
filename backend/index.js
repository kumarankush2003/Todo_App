const express = require("express")
const app =express();
app.use(express.json());
const {createTodo} =require("./type")

app.post("/todo",function(req,res){
    const createpayload=req.body;
    const ParsePayload=createTodo.safeParse(createpayload);
    if(!ParsePayload.success){
        res.status(411).json({
            message:"Invalid payload",
        })
        return;
        }
})
app.get("/todos",function(req,res){
    
})
app.put("/completed",function(req,res){
    const UpdatePayload= req.body;
    const ParsePayload=updateTodo.safeParse(UpdatePayload);
    if(!ParsePayload.success){
        res.status(411).json({
            message:"Invalid payload",
            })
            return;
            }
})