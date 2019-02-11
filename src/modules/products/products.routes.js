import express from "express";
import ProductController from "./products.controller";

const router = express.Router();
const controller = new ProductController(router);

export default router;
