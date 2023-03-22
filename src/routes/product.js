import express from "express";
import { create, getAll, getOne, remove, update } from "../controlles/product";

const router = express.Router();

router.post("/products", create);
router.get("/products", getAll);
router.put("/products/:id", update);
router.get("/products/:id", getOne);
router.delete("/products/:id", remove);





export default router;