import Stripe from "stripe";
import { connectToDatabase } from "../../../../../lib/mongodb";
import { authenticate } from "../../../authentication";
import { verifyUser } from "../../../verification";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export default authenticate(async (req, res) => {
  const { userId, role, email } = await verifyUser(req);

  const { db } = await connectToDatabase();

  if (userId) {
    if (req.method == "GET") {
      try {
        let members = [];
        if (role == "admin") {
          //fetch customers from stripe api
          let payments = await stripe.checkout.sessions.list({
            limit: 5,
          });

          console.log("stripe payment list", payments);

          for (let i = 0; i < payments?.data?.length; i++) {
            const payment = payments?.data[i];

            const { id, customer_details, payment_status, amount_total } =
              payment;
            //fetch members with data?.email
            let user = await db
              .collection("members")
              .findOne(
                { email: customer_details?.email },
                { projection: { email: 1, verified: 1, role: 1, name: 1 } }
              );

            if (user?.email) {
              if (payment_status == "paid") {
                members.push({
                  verified: user?.verified,
                  id: user?._id,
                  role: user?.role,
                  name: user?.name,
                  email: customer_details?.email,
                  status: payment_status,
                  amount: amount_total,
                });
              }
            }
          }

          console.log("database user list", payments);

          if (members?.length >= 0) {
            res.status(200).json(members);
          } else {
            res.status(400).json({ msg: "There are no payments" });
          }
        } else {
          let sessions = await stripe.checkout.sessions.list({
            limit: 50,
          });

          const filteredPayments = sessions?.data?.filter(
            (payload) => payload?.customer_details?.email === email
          );

          const payments = [];

          for (let i = 0; i < filteredPayments.length; i++) {
            const payment = filteredPayments[i];

            const { id, customer_details, payment_status, amount_total } =
              payment;
            let user = await db
              .collection("members")
              .findOne(
                { email: customer_details?.email },
                { projection: { verified: 1, role: 1, name: 1 } }
              );

            if (payment_status == "paid") {
              payments.push({
                verified: user?.verified,
                role: user?.role,
                userId,
                id,
                name: user?.name,
                email: customer_details?.email,
                status: payment_status,
                amount: amount_total,
              });
            }
          }
console.log(payments);
          if (payments?.length > 0) {
            res.status(200).json(payments);
          } else {
            res.status(400).json({ msg: "There is no payments" });
          }
        }
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
