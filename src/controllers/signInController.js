import { sessionsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";

export async function postSignIn(req, res) {
  const user = res.locals.user;
  console.log(user)
  const token = uuidV4();

  try {
    await sessionsCollection.insertOne({ token, userId: user._id });
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
