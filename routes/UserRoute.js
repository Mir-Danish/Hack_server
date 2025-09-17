import express from "express";
import { getAllUsers, registerController } from "../controllers/UserController.js";
const router = express.Router();

router.post("/register", registerController);

router.get("/all-users", getAllUsers);


export default router;
