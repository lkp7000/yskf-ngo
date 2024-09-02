import Stripe from "stripe";

export const stripePayment = async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: "something went wrong" });
  }
};
