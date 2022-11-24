import products from "../productsData/products.js";
import { productsCollection } from "../database/db.js"

export async function createProductCollection(res, req){
    try{
        await productsCollection.insertMany(products);
        console.log("Data inserted successfully")
        res.sendStatus(201);
    } catch(error){
        console.log(error.message);
        res.sendStatus(500);
    }
}