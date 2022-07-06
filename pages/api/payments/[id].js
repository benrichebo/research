import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { insertToArray, removeFromArray } from "../db/update";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const payment = await findOne("payments", {
      _id: ObjectId(userId),
      "payments.id": id,
    });

    if (payment?.id) {
      res.status(200).json(payment);
    } else {
      res.status(400).json({ msg: "There is no payments" });
    }
  }
};
