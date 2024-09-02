import authRouter from "@/routes/auth";
import indexRouter from "@/routes/index";
import tweetRouter from "@/routes/tweet";
import stripeRouter from "@/routes/stripe";
import donarRouter from "@/routes/donars";

export default function (app) {
  app.use("/", indexRouter);
  app.use("/auth", authRouter);
  app.use("/donar", donarRouter);
  app.use("/stripe", stripeRouter);
  app.use("/tweets", tweetRouter);
  app.use("/payment", tweetRouter);
}
