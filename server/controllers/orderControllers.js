import expressAsyncHandler from "express-async-handler";
import user from "../models/userModel.js";
import nodemailer from "nodemailer";
import order from "../models/orderModel.js";
import {nanoid} from "nanoid";

//Show my orders
const showOrders=expressAsyncHandler(async(req,res)=>{
  const userId=req.user.uniqueId;
  const orders=await order.find({userId});
  res.status(200).json(orders);
})

//Create a new Order
const createOrder=expressAsyncHandler(async(req,res)=>{
    const userId=req.user.uniqueId;
    const userEmail=req.user.email;
    const userName=req.user.username;
    const userPlace=req.user.place;
    const userContact=req.user.contact;
    const {items}=req.body;
    var amount=0;

    items.forEach(async item=>{
      amount=Number(amount)+Number(item.quantity*item.price);

      const uniqueId=item.cookId;

      const cookDetails =await user.findOne({uniqueId})

      const cookEmail=cookDetails.email;
      const cookName=cookDetails.username;

      const Title=item.title;

      var transporter=nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:"waronboard2378@gmail.com",
            pass:"epxn jkac syob gndt"
        }
    });
    
    var mailOptions={
        from:"imt_2022038@iiitm.ac.in",
    to:cookEmail,
    subject:`Request for ${Title}`,
    html:` <!DOCTYPE html>
    <html>
    <head>
      <title>Request for ${Title}</title>
    </head>
    <body style="font-family: 'Poppins', sans-serif; background-color: #f7f0e3; margin: 0; padding: 0;">
      <div style="width: 80%; margin: 20px auto; background-color: #fffdd0; padding: 20px; border-radius: 5px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); color: #5e4c5a;">
        <h1 style="color: #4d2600; text-align: center;">Request for ${Title}</h1>
        <p style="line-height: 1.6;">Dear ${cookName},</p>
        <p style="line-height: 1.6;">I hope this message finds you well. I wanted to inform you that someone has requested the <Recipe Name> from one of our patrons. They are eager to experience your culinary expertise with this delightful dish.</p>
        
        <div class="contact-details" style="margin-top: 20px;">
          <p style="margin-bottom: 5px;">Here are the contact details:</p>
          <p style="margin-bottom: 5px;"><strong>Name: ${userName}</strong></p>
          <p style="margin-bottom: 5px;"><strong>Contact Number: ${userContact}</strong></p>
          <p style="margin-bottom: 5px;"><strong>Email Address: ${userEmail}</strong></p>
          <p style="margin-bottom: 5px;"><strong>Place: ${userPlace}</strong></p>
          <p style="margin-bottom: 5px;"><strong>User ID: ${userId}</strong></p>
        </div>
        
        <!-- Updated image link -->
        <img src="https://source.unsplash.com/600x400/?cooking" alt="Recipe Image" style="max-width: 100%; height: auto; display: block; margin: 20px 0; border-radius: 5px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);">
        
        <p style="line-height: 1.6;">Your exceptional culinary skills have always delighted our guests, and I'm confident that this <Recipe Name> will be no exception. Your expertise and dedication in the kitchen continue to elevate the dining experience for everyone.</p>
        
        <p style="line-height: 1.6;">If you require any additional information or assistance in preparing this dish, please don't hesitate to reach out. We greatly appreciate your efforts in making our menu so special.</p>
        
        <p style="line-height: 1.6;">Thank you for your attention to this request. We look forward to savoring the <Recipe Name> prepared by your talented hands.</p>
        
        <p style="font-size: 14px; text-align: center; margin-top: 20px; color: #7d6608;">Best regards,<br>Chef Currywala<br>Assistant Order Manager<br>Corporate Thaali<br></p>
      </div>
    </body>
    </html>
    
    ` }
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })

    const orderId="OR/"+nanoid(6);
    const Order=await order.create({orderId,userId,items,amount});

    res.status(201).json(Order);

})

export  {showOrders,createOrder};