import mongoose from "mongoose";

const orderItemSchema=new mongoose.Schema({
    foodId:{type:String},
    cookId:{type:String},
    title:{type:String},
    quantity:{type:Number,default:1},
    price:{type:String}
});

const orderSchema=new mongoose.Schema({
    orderId:{type:String},
    userId:{type:String},
    items:[orderItemSchema],
    amount:{type:Number}
},
{
    timestamps:true
})

const order=mongoose.model("order",orderSchema);
export default order;