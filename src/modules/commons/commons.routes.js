import express from "express";
import CommonsController from "./commons.controller";

const router = express.Router();

router.get('/', CommonsController.showVersion);

export default router;
