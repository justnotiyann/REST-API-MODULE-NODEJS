import express from "express";
const router = express.Router();
import * as Products from "../controllers/Products.js";

router.get("/", Products.getProduct);
router.post("/add", Products.addProduct);
router.get("/delete/:id", Products.deleteProduct);
router.post("/edit/:id", Products.editProduct);

export default router;
