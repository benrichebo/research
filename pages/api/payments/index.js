import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      try {
        const { db } = await connectToDatabase();

        let payments = [];
        if (role == "admin") {
          payments = await db.collection("payments").find().toArray();
        } else {
          payments = await db.collection("payments").find({ userId });
        }

        if (payments?._id || payments?.length >= 0) {
          res.status(200).json(payments);
        } else {
          res.status(400).json({ msg: "There are no payments" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
