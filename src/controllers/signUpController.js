import { usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export async function postSignUp(req, res) {
  //nome, e-mail e senha
  const user = res.locals.user;
  const passwordHashed = bcrypt.hashSync(user.password, 10);

  try {
    await usersCollection.insertOne({
      ...user,
      password: passwordHashed,
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
