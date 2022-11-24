import products from "../productsData/products.js";
import { productsCollection } from "../database/db.js"

export async function createProductCollection(req, res){
    console.log(products)
    try{
        await productsCollection.insertMany(products);
        console.log("Data inserted successfully")
        return res.sendStatus(201);
    } catch(error){
        console.log(error.message);
        return res.sendStatus(500);
    }
}