import { ObjectId } from "mongodb";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    try {
      let payments = [];
      if (role == "admin") {
        payments = await db.collection("payments").find().toArray();
      } else {
        payments = await db
          .collection("payments")
          .findOne({ _id: ObjectId(userId) }, { projection: { payments: 1 } });
      }

      if (payments?._id || payments?.length >= 0) {
        res.status(200).json(payments);
      } else {
        res.status(400).json({ msg: "There are no payments" });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
});
