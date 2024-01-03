import expressAsyncHandler from "express-async-handler";
import foodItem from "../models/foodModel.js";
import {nanoid} from "nanoid";

//Create Food Listing
const createFood=expressAsyncHandler(async(req,res)=>{
    const {title,price,description}=req.body;
    const cookId=req.user.uniqueId;

    const foodId="FD/"+nanoid(7);
    if(req.user.role==="cook")
    {
    const food=await foodItem.create({title,price,description,cookId,foodId});
    res.status(201).json(food);
    }
    else
    res.status(401).json({message:"User is not a cook"})
})

export default createFood;