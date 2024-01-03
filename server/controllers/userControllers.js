import expressAsyncHandler from "express-async-handler";
import user from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {nanoid} from "nanoid"

//Register a user
const registerUser=expressAsyncHandler(async(req,res)=>{
    var {username,place,email,contact,password,role}=req.body;
    var uniqueId;
    //hash password
    const hashedPassword=await bcrypt.hash(password,10);
    password=hashedPassword

    if(role=="cook")
    uniqueId="CK/"+nanoid(6);
    else if(role=="corporate")
    uniqueId="CT/"+nanoid(6);

    const regUser=await user.create({username,place,email,contact,uniqueId,password,role})
    res.status(201).json(regUser);
})

//login user
const loginUser=expressAsyncHandler(async(req,res)=>{
    const regUser=await user.findOne({email:req.body.email});
    const password=req.body.password
    if(!regUser)
    res.status(404).json({message: "User doesn't exist"})
    else if(!password)
    res.status(400).json({message:"Password doesn't match"})
    else if(regUser && bcrypt.compare(regUser.password,password))
    {
        const token=jwt.sign({regUser},process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.status(200).json(token);

        console.log(regUser);
        if(regUser.role==="cook")
        res.redirect("/cook/dashboard")
        else if(regUser.role==="corporate")
        res.redirect("/user/dashboard")
    }
  
})

export {registerUser,loginUser};