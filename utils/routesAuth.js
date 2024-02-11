import express from "express";
import jwt from "jsonwebtoken";

const app = express();

// Middleware for checking the token
export const authenticateToken = (req, res, next) => {
  // Get the token from the header
  const authHeader = req.headers["authorization"];

  if (authHeader == null) return res.sendStatus(401);

  jwt.verify(authHeader, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};


