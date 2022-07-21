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
      const admin = await db
        .collection("members")
        .findOne({ _id: ObjectId(id) });

      console.log("admin found", admin);

      if (admin?._id) {
        res.status(200).json(admin);
      } else {
        res.status(400).json({ msg: "There is no admin" });
      }
    }

    if (req.method == "PUT") {
      const body = JSON.parse(req.body);

      const response = await db
        .collection("members")
        .updateOne({ _id: ObjectId(id) }, { $set: { ...body } });
      console.log("response", response);
      if (response?.acknowledged) {
        res.status(200).json({ msg: "admin updated successfully" });
      } else {
        statusCode404(res);
      }
    }

    if (method == "DELETE") {
      console.log("delete admin");
      const response = await db
        .collection("members")
        .deleteOne({ _id: ObjectId(id) });

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "admin was successfully deleted" });
      } else {
        res.status(400).json({ msg: "admin was not deleted" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});
