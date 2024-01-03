import express from "express";
import createFood from "../controllers/foodControllers.js";
import validateToken from "../middlewares/validateToken.js";

const Router=express.Router();

Router.use("/",validateToken)
Router.post("/create",createFood)

export default Router;