import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("mongodb working");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("techplus");
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");