import express from "express";
import validateToken from "../middlewares/validateToken.js";
import { addToCart, removeFromCart, showCart } from "../controllers/cartControllers.js";

const Router=express.Router();

Router.use("/",validateToken)
Router.post("/add",addToCart)
      .post("/remove",removeFromCart)
      .post("/show",showCart)

export default Router;