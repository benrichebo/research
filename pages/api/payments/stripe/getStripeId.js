import { verifyUser } from "../../verification";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export const getStripeId = async (req) => {
  const { userId, email } = await verifyUser(req);
  try {
    //2. stripe payment integration
    const session = await stripe?.checkout?.sessions?.create({
      client_reference_id: userId,
      billing_address_collection: "required",
      submit_type: "pay",
      payment_method_types: ["card"], //pm_card_us,
      //payment_method_options: ["pm_card_amex"],
      line_items: [
        {
          price_data: {
            // The currency parameter determines which
            // payment methods are used in the Checkout Session.
            currency: "eur",
            product_data: {
              name: "Association for Researches and Planners",
            },
            unit_amount: process.env.PRICE,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      mode: "payment", //it can be "subscription" for recurring payments only
      success_url: `${req.headers.origin}/dashboard/home/${userId}`,
      cancel_url: `${req.headers.origin}/make-payment`,
    });

    if (session?.id) {
      return session?.id;
    } else {
      return { msg: "Getting session id failed" };
    }
  } catch (error) {
    return { msg: error.message };
  }
};
