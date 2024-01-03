import express from "express";
import { loginUser, registerUser } from "../controllers/userControllers.js";

const Router=express.Router();

Router.post("/register",registerUser)
      .post("/login",loginUser)

export default Router;