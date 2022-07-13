import Stripe from "stripe";
import { authenticate } from "../../../authentication";
import { verifyUser } from "../../../verification";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      try {
        if (role == "admin") {
          const sessions = await stripe.checkout.sessions.list({
            limit: 50,
          });
          //console.log("sessions", sessions?.data);
          if (sessions?.data?.length >= 0) {
            let allData = [];
            for (let i = 0; i < sessions?.data.length; i++) {
              const session = sessions?.data[i];
              const data = {
                id: session?.id,
                paymentStatus: session?.payment_status,
                email: session?.customer_email,
                amount:  session?.amount_total
              };
              allData.push(data);
            }
            res.status(200).json(allData);
          } else {
            res.status(400).json({ msg: "There are no payment attempts" });
          }
        }
      } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
