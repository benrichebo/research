import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export default async (req, res) => {
  //fetch customers from stripe api
  try {
    let payments = await stripe.customers.list({
      limit: 50,
    });

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
