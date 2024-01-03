import express from "express";
import {createFood,  showFood } from "../controllers/foodControllers.js";
import validateToken from "../middlewares/validateToken.js";

const Router=express.Router();

Router.use("/",validateToken)
Router.post("/create",createFood)
      .get("/all",showFood)

export default Router;