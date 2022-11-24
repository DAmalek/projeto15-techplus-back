import router from "./routes/signUpRoutes.js"
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import joi from "joi";

dotenv.config()

import signUpRouters from "./routes/signUpRoutes.js"
import signInRouters from './routes/signInRoutes.js'
import productRouters from './routes/productsRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use(router)
app.use(signUpRouters)
app.use(signInRouters)
app.use(productRouters)




app.listen(4000, () => console.log("Server running in port: 4000"))
// app.listen(process.env.PORT, () => {
//     console.log('server online, port' + process.env.PORT);
// })

// conta do render  user: admin  senha: admin123