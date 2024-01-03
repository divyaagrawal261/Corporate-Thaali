import mongoose from "mongoose";

const cartItemSchema=new mongoose.Schema({
    foodId:{type:String},
    cookId:{type:String},
    title:{type:String},
    quantity:{type:Number,default:1},
    price:{type:String}
});

const cartSchema=new mongoose.Schema({
    userId:{type:String},
    items:[cartItemSchema],
    amount:{type:Number}
})

const cart=mongoose.model("cart",cartSchema);
export default cart;