import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());



app.listen(process.env.PORT, () => {
    console.log('server online, port' + process.env.PORT);
})