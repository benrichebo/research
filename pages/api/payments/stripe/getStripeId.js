import Stripe from "stripe";
import { verifyUser } from "../../verification";
import { insertToArray } from "../../db/update";
import { connectToDatabase } from "../../../../lib/mongodb";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export const getStripeId = async (req) => {
  try {
    //2. stripe payment integration
    const session = await stripe?.checkout?.sessions?.create({
      //client_reference_id: "userId",
      billing_address_collection: "required",
      submit_type: "donate",
      payment_method_types: ["card"], //pm_card_us,
      //payment_method_options: ["pm_card_amex"],

      mode: "payment", //it can be "subscription" for recurring payments only
      line_items: [
        {
          name: "Membership signup",
          amount: 15000,
          currency: "usd",
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/dashboard/payments`,
      cancel_url: `${req.headers.origin}/make-payment`,
    });

    console.log("results payment", result);

    if (session?.id) {
      return session?.id;
    } else {
      return { msg: "Getting session id failed" };
    }
  } catch (error) {
    return { msg: error.message };
  }
};
