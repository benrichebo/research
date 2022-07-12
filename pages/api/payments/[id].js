import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
import { authenticate } from "../authentication";

export default authenticate(async (req, res) => {
  const { db } = await connectToDatabase();

  const { id } = req.query;

  if (req.method == "GET") {
    const payment = await db
      .collection("payments")
      .findOne({ _id: ObjectId(id) });

    if (payment?._id) {
      res.status(200).json(payment);
    } else {
      res.status(400).json({ msg: "There is no payments" });
    }
  }

  if (req.method == "PUT") {
    const body = JSON.parse(req.body);

    const response = await db
      .collection("payments")
      .findOneAndUpdate({ _id: ObjectId(id) }, body);

    if (response?.upsertedCount == 1) {
      res.status(200).json({ msg: "payment updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const response = await db
      .collection("payments")
      .deleteOne({ _id: ObjectId(id) });

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "payment was successfully deleted" });
    } else {
      res.status(400).json({ msg: "payment was not deleted" });
    }
  }
});
