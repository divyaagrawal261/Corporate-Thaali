import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized!");
      }
      console.log(decoded.regUser)
      req.user = decoded.regUser;
      next();
    });

    if(!token){
        res.status(401);
        throw new Error("User is not Authorized or token is missing");
    }
  }
});

export default validateToken;
