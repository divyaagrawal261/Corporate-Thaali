import express from "express";
import createOrder from "../controllers/orderControllers.js";
import validateToken from "../middlewares/validateToken.js";

const Router=express.Router();

Router.use("/",validateToken)
Router.post("/create",createOrder)

export default Router;