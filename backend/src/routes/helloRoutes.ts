import { Router } from "express";
import { getHello } from "../controllers/helloWorldController";

const router = Router();

router.get("/hello", getHello);

export default router;
