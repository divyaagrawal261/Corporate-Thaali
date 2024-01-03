import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username: {
        type:String,
        required:[true, "Please enter a username"]
    },
    place:{
        type:String,
        required:[true, "Please enter a location"]
    },
    email:{
        type:String,
        required:[true, "Please enter an email address"],
        unique:[true, "email already exist"]
    },
    contact:{
        type:Number,
        required:[true, "Please enter a phone number"],
        unique:[true, "Contact number already exist"]
    },
    uniqueId:{
        type:String
    },
    password:{
        type:String,
        required:[true, "Please enter a password"]
    },
    role:{
        type:String
    }
});

const user=mongoose.model("User",userSchema);
export default user;