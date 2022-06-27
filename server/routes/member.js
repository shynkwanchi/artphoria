import express from "express";
import { signUp, signIn } from "../controllers/memberController.js";

const memberRouter = express.Router();

// Member sign up API
memberRouter.post('/sign-up', signUp);

// Member sign in API
memberRouter.get('/sign-in', signIn);

export default memberRouter;