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
        let users = [];
        if (role == "admin") {
          //fetch customers from stripe api
          let payments = await stripe.customers.list({
            limit: 50,
          });

          for (let i = 0; i < payments?.data?.length; i++) {
            const payment = payments?.data[i];
            //fetch users with data?.email
            let user = await db
              .collection("users")
              .findOne({ email: payment?.email });

            if (user?.email) {
              users.push({
                user,
                customer: {
                  id: payment?.id,
                  email: payment?.email,
                  address: payment?.address,
                },
              });
            }
          }

          if (users?.length >= 0) {
            res.status(200).json(users);
          } else {
            res.status(400).json({ msg: "There are no payments" });
          }
        } else {
          const payments = await stripe.customers.search({
            query: `email: ${email} AND status:"succeeded"`,
          });

          if (payments?.data) {
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
