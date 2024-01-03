import express from "express";
import { getCurrentUser, loginUser, registerUser } from "../controllers/userControllers.js";
import validateToken from "../middlewares/validateToken.js";

const Router=express.Router();

Router.post("/register",registerUser)
      .post("/login",loginUser)
      .post("/current",validateToken,getCurrentUser)

export default Router;