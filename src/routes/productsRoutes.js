import{
    createProductCollection,
} from "../controllers/productsController.js"

import { Router } from "express"

const router = Router()

router.get("/products", createProductCollection)

export default router

