import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";
import moment from "moment";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  const method = req.method;

  try {
    const { db } = await connectToDatabase();

    if (req.method == "GET") {
      const conference = await db
        .collection("conferences")
        .findOne({ _id: ObjectId(id) });

      //calculate posted at
      const date = conference?.createdAt?.slice(0, 10).split("-");
      const fromNow = moment(date, "YYYYMMDD").fromNow();

      console.log("conference found", conference);

      if (conference?._id) {
        res.status(200).json({ ...conference, fromNow });
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
      console.log("delete conference");
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
    res.status(500).json({ msg: error.message });
  }
});
