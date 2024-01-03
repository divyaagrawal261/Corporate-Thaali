import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please provide a title"]
    },
    price:{
        type:Number,
        required:[true, "Please provide a price"]
    },
    description:{
        type:String
    },
    cookId:{
        type:String
    },
    foodId:{
        type:String
    }
});

const foodItem=mongoose.model("foodItem",foodSchema);
export default foodItem;