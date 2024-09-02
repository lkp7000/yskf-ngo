import { stripe } from "@/controllers/stripe";
import * as stripeController from "@/controllers/stripe";

const { Router } = require("express");

const router = Router();

router.post("/create-payment-intent", stripeController.stripePayment);

export default router;
