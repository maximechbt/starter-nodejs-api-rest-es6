import express from "express";
import ProductController from "./products.controller";
import { setCrudRoutes } from "../../utils/CrudRoutes";

const controller = new ProductController();
const router = express.Router();

setCrudRoutes(router, controller);

export default router;
