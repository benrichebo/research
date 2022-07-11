import { authenticate } from "../authentication";
import { findOne } from "../db/find";
import { ObjectId } from "mongodb";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const payments = await findOne(
        "payments",
        { _id: ObjectId(userId) },
        { projection: { payments: 1 } }
      );

      if (payments?._id) {
        res.status(200).json(payments);
      } else {
        res.status(400).json({ msg: "There are no payments" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
