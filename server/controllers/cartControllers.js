import expressAsyncHandler from "express-async-handler";
import foodItem from "../models/foodModel.js";
import Cart from "../models/cartModel.js";

//Add items to Carts
const addToCart=expressAsyncHandler(async(req,res)=>{
    const userId=req.user.uniqueId;
    const {foodId}=req.body;

    const food=await foodItem.findOne({foodId});
    const cookId=food.cookId;
    const title=food.title;
    const price=food.price;

    let cart=await Cart.findOne({userId});

    if(!cart)
    {
        cart=await Cart.create({userId})
    }
    else
    {
        const existingItem=cart.items.find(item=> item.foodId===foodId);
        if(existingItem)
        {
            existingItem.quantity++;
        }
        else
        cart.items.push({foodId, cookId, title, price})
        await cart.save();
    }

    res.status(201).json(cart);
})

//Remove from Cart
const removeFromCart=expressAsyncHandler(async(req,res)=>{
    const userId=req.user.uniqueId;

    const foodId=req.body.foodId;

    let cart=await Cart.findOne({userId});

    cart.items=cart.items.filter(item=>item.foodId!=foodId);
    await cart.save();
    res.json(cart);
})

//Show cart
const showCart=expressAsyncHandler(async(req,res)=>{
    const userId=req.user.uniqueId;
    
    const cart=await Cart.findOne({userId});

    if(cart)
    res.status(200).json(cart)
    
    else
    res.status(404).json({message:"Oops! the cart is empty"})
})

export {addToCart,removeFromCart,showCart};