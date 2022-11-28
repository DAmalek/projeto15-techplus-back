import { sessionsCollection, usersCollection } from "../database/db.js";
import { userSchema } from "../models/userModel.js";
import bcrypt from "bcrypt";
export function userSchemaValidation(req, res, next) {
  const user = req.body;

  const { error } = userSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.user = user;

  next();
}

export async function signBodyValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    if (!user) {
      res.senStatus(401).send("senha ou usuario incorretos");
    }
    const passwordOk = bcrypt.compareSync(password, user.password);
    if (!passwordOk) {
      res.sendStatus(401).send("senha ou usuario incorretos");
    }

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}

export async function RoutesValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    res.sendStatus(401).send("user deslogado ou invalido");
  }

  try {
    const sessions = await sessionsCollection.findOne({ token });
    const user = await usersCollection.findOne({ _id: sessions.userId });
    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}
