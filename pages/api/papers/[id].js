import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { db } = await connectToDatabase();

  const { id } = req.query;

  if (req.method == "GET") {
    const paper = await db.collection("papers").findOne({ _id: ObjectId(id) });

    if (paper?._id) {
      res.status(200).json(paper);
    } else {
      res.status(400).json({ msg: "There is no papers" });
    }
  }

  if (req.method == "PUT") {
    const body = JSON.parse(req.body);
    console.log("put body", body);

    const response = await db
      .collection("papers")
      .updateOne({ _id: ObjectId(id) }, { $set: { ...body } });
    console.log("response", response);
    if (response?.acknowledged) {
      res.status(200).json({ msg: "paper updated successfully" });
    } else {
      res.status(400).json({ msg: "paper update failed" });
    }
  }

  if (req.method == "DELETE") {
    const response = await db
      .collection("papers")
      .deleteOne({ _id: ObjectId(id) });

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "paper was successfully deleted" });
    } else {
      res.status(400).json({ msg: "paper was not deleted" });
    }
  }
});
