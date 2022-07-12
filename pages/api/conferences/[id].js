import { ObjectId } from "mongodb";
import { insertToArray, removeFromArray } from "../db/update";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const conference = await db
      .collection("conferences")
      .findOne({ _id: ObjectId(id) });

    if (conference?._id) {
      res.status(200).json(conference);
    } else {
      res.status(400).json({ msg: "There is no conferences" });
    }
  }

  if (req.method == "PUT") {
    const body = JSON.parse(req.body);

    const response = await db
      .collection("conferences")
      .findOneAndUpdate({ _id: ObjectId(id) }, body);

    if (response?.upsertedCount == 1) {
      res.status(200).json({ msg: "article updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const response = await db
      .collection("conferences")
      .deleteOne({ _id: ObjectId(id) });

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "Article was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Article was not deleted" });
    }
  }
});
