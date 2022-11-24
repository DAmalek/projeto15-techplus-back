
import { usersCollection } from "../database/db.js"
import bcrypt from "bcrypt"

export async function postSignUp(req, res) {
    //nome, e-mail e senha
    res.locals.user = user;

    try {
        const passwordHashed = bcrypt.hashSync(user.password, 10);

        await usersCollection.insertOne({
            ...user,
            password: passwordHashed
        })
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
            res.sendStatus(500)
    }
}