import Stripe from "stripe";
import { ObjectId } from "mongodb";
import moment from "moment";
import { verifyUser } from "../../verification";
import { insertToArray } from "../../db/update";
import { connectToDatabase } from "../../../../lib/mongodb";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export const getStripeId = async (req) => {
  const { userId } = await verifyUser(req);
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

    const date = new Date();

    const payment = {
      userId,
      paymentId: session?.id,
      createdAt: moment(date).format("lll"),
    };

    const data = {
      $push: { payments: payment },
    };

    const { db } = await connectToDatabase();

    const result = await db
      .collection("payments")
      .updateOne({ _id: ObjectId(userId) }, data, {
        upsert: true,
      });

    console.log("results payment", result);

    if (result.acknowledged) {
      return session?.id;
    } else {
      return { msg: "Getting session id failed" };
    }
  } catch (error) {
    return { msg: error.message };
  }
};
