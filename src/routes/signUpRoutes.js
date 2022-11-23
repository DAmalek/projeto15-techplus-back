import{
    postSignUp,
} from "../controllers/signUpController.js"

import { Router } from "express"
import { userSchemaValidation } from "../middlewares/authValidationMiddleware.js"

const router = Router()

router.post("/sign-up", userSchemaValidation, postSignUp)

export default router

