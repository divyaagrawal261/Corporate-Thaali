import expressAsyncHandler from "express-async-handler";
import foodItem from "../models/foodModel.js";
import {nanoid} from "nanoid";

//Show all food listings
const showFood=expressAsyncHandler(async(req,res)=>{
    const food=await foodItem.find();
    res.status(200).json(food);
})

//show my food listings
const showMyFood=expressAsyncHandler(async(req,res)=>{
    const cookId=req.user.uniqueId;
    const food=await foodItem.find({cookId});
    res.status(200).json(food);
})

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

export {showFood, showMyFood, createFood};