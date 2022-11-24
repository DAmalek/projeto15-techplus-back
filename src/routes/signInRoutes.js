import { Router } from "express";
import { postSignIn } from "../controllers/signInController.js";
import { signBodyValidation } from "../middlewares/authValidationMiddleware.js";

const router = Router();

router.post("/sign-in", signBodyValidation, postSignIn);

export default router;
