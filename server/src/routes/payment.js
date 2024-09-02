import * as paymentController from "@/controllers/payment";
import { Router } from "express";

const router = Router();
router.route("/").post(paymentController.payment);
