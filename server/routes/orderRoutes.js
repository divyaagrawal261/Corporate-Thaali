import express from "express";
import {createOrder, showOrders } from "../controllers/orderControllers.js";
import validateToken from "../middlewares/validateToken.js";

const Router=express.Router();

Router.use("/",validateToken)
Router.post("/create",createOrder)
      .post("/all",showOrders)

export default Router;