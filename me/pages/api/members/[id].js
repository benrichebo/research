import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  const method = req.method;

  try {
    const { db } = await connectToDatabase();

    if (req.method == "GET") {
      const member = await db
        .collection("members")
        .findOne({ _id: ObjectId(id) });

      console.log("member found", member);

      if (member?._id) {
        res.status(200).json(member);
      } else {
        res.status(400).json({ msg: "There is no member" });
      }
    }

    if (req.method == "PUT") {
      const body = JSON.parse(req.body);

      const response = await db
        .collection("mem")
        .updateOne({ _id: ObjectId(id) }, { $set: { ...body } });
      console.log("response", response);
      if (response?.acknowledged) {
        res.status(200).json({ msg: "member updated successfully" });
      } else {
        statusCode404(res);
      }
    }

    if (method == "DELETE") {
      console.log("delete member");
      const response = await db
        .collection("mem")
        .deleteOne({ _id: ObjectId(id) });

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "member was successfully deleted" });
      } else {
        res.status(400).json({ msg: "member was not deleted" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
