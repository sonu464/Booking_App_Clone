import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  Jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(createError(401, "Token is not valid!"));
    req.user = user;
    next();
  });
};
