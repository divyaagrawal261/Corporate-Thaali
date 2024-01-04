import express from "express";
import {createFood,  showFood, showMyFood } from "../controllers/foodControllers.js";
import validateToken from "../middlewares/validateToken.js";

const Router=express.Router();

Router.get("/all",showFood)
Router.use("/",validateToken)
Router.post("/create",createFood)
      .post("/my",showMyFood)

export default Router;