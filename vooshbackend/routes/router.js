const express = require("express");
const router = express.Router();
const Orders = require("../models/order")

router.post("/addorder",async(req,res)=>{
    console.log(req.body);
    const {name,user_id,category,cost,img,id} = req.body;
    try{
       
       console.log(name)
        var addorders = await new Orders({
            name,user_id,category,cost,img
        }).save()
       // await addorders.save();
       console.log("ff:",addorders)
        res.status(201).json(addorders);
        console.log("ff:",addorders)
       
    } catch(error){
        console.log(error)
        res.status(404).json(error)
    }
});
//getblog
router.get("/getorder/:id",async(req,res)=>{
    const {id} = req.params;
    try{
            const orderdata = await Orders.find({user_id:id});
            res.status(201).json(orderdata);
            console.log(orderdata)
       
    }catch(error){
           res.status(404).json(error)
    }


})


module.exports = router;