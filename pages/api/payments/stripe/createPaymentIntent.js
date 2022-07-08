const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const createPaymentIntent = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 15000, //amount of money to pay 20
    currency: "usd", //currency to use "usd" for payment
    payment_method_types: ["card"],
    mode: "payment", //it can be "subscription" for recurring payments only
  });

  return { clientSecret: paymentIntent.client_secret };
};
