import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  try {
    const { db } = await connectToDatabase();

    if (req.method == "GET") {
      const conference = await db
        .collection("conferences")
        .findOne({ _id: ObjectId(id) });

      console.log("conference found", conference);

      if (conference?._id) {
        res.status(200).json(conference);
      } else {
        res.status(400).json({ msg: "There is no conference" });
      }
    }

    if (req.method == "PUT") {
      const body = JSON.parse(req.body);

      const response = await db
        .collection("conferences")
        .updateOne({ _id: ObjectId(id) }, { $set: { ...body } });
      console.log("response", response);
      if (response?.acknowledged) {
        res.status(200).json({ msg: "Conference updated successfully" });
      } else {
        statusCode404(res);
      }
    }

    if (method == "DELETE") {
      const response = await db
        .collection("conferences")
        .deleteOne({ _id: ObjectId(id) });

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "Conference was successfully deleted" });
      } else {
        res.status(400).json({ msg: "Conference was not deleted" });
      }
    }
  } catch (error) {
     res.status(500).json({ msg: "Internal server error" });
  }
});
