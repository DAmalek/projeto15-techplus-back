import { usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export async function postSignUp(req, res) {
  //nome, e-mail e senha
  const user = req.body
  const passwordHashed = bcrypt.hashSync(user.password, 10);

  try {

    const emailExists = await usersCollection.findOne({ email: user.email })
    if (emailExists) {
      return res.status(400)
        .send({
          message: "Este e-mail já está sendo utilizado."
        })
    }
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
