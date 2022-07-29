const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const createPaymentIntent = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(150, "usd"), //amount of money to pay 20
    currency: "usd", //currency to use "usd" for payment
    quantity: 1,
    payment_method_types: ["card"],
    //mode: "payment", //it can be "subscription" for recurring payments only
  });

  return { clientSecret: paymentIntent.client_secret };
};
