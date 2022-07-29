import Stripe from "stripe";
import { connectToDatabase } from "../../../../../lib/mongodb";
import { authenticate } from "../../../authentication";
import { verifyUser } from "../../../verification";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export default authenticate(async (req, res) => {
  const { userId, role, email } = await verifyUser(req);

  try {
    const { db } = await connectToDatabase();

    const { id } = req.query;

    if (!userId) {
      res.status(400).json({ msg: "You can t access this data" });
    }

    if (req.method != "GET") {
      res.status(400).json({ msg: "Invalid method" });
    }

    let sessions = await stripe.checkout.sessions.list({
      limit: 100,
    });

    const filteredPayments = sessions?.data?.filter(
      (payload) => payload?.customer_details?.email === email
    );

    let paymentData = null;

    for (let i = 0; i < filteredPayments.length; i++) {
      const payment = filteredPayments[i];

      const { id, customer_details, payment_status, amount_total } = payment;
      let user = await db
        .collection("members")
        .findOne(
          { email: customer_details?.email },
          { projection: { verified: 1, role: 1, name: 1 } }
        );

      if (payment_status == "paid") {
        paymentData = {
          verified: user?.verified,
          role: user?.role,
          userId,
          _id: user?._id,
          name: user?.name,
          email: customer_details?.email,
          status: payment_status,
          amount: amount_total / 100,
        };
      }
    }
    console.log(paymentData);
    if (paymentData?._id) {
      res.status(200).json(paymentData);
    } else {
      res.status(400).json({ msg: "There is no payments" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
