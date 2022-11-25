import{
    createProductCollection,
    getProductCollection
} from "../controllers/productsController.js"

import { Router } from "express"

const router = Router()

router.post("/products", createProductCollection)
router.get("/products", getProductCollection)

export default router

