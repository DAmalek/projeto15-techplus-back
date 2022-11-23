import router from "./routes/signUpRoutes.js"
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import joi from "joi";

dotenv.config()

import signUpRouters from "./routes/signUpRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(router)
app.use(signUpRouters)

export const userSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
})

app.listen(4000, () => console.log("Server running in port: 4000"))
// app.listen(process.env.PORT, () => {
//     console.log('server online, port' + process.env.PORT);
// })

// conta do render  user: admin  senha: admin123