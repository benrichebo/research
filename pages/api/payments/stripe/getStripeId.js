import Stripe from "stripe";
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
      success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/make-payment`,
    });

    console.log("session", session);

    //send url to client for payment
    return session?.id;
  } catch (error) {
    return {msg: error.message};
  }
};
