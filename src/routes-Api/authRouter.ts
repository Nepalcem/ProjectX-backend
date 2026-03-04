import express from "express";
import authControllers from "@/controllers/authController/index.js";
import validateBody from "@/middlewares/validateBody.js";
import zodSchemas from "@/zodSchemas/index.js";

const router = express.Router();

router.post(
  "/register",
  validateBody(zodSchemas.register),
  authControllers.register,
);

router.get("/verify/:verificationToken", authControllers.verifyEmail);

export default router;
