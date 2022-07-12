import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const paper = await db
      .collection("papers")
      .findOne({ _id: ObjectId(id) });

    if (paper?._id) {
      res.status(200).json(paper);
    } else {
      res.status(400).json({ msg: "There is no papers" });
    }
  }

  if (req.method == "PUT") {
    const body = JSON.parse(req.body);

    const response = await db
      .collection("papers")
      .findOneAndUpdate({ _id: ObjectId(id) }, body);

    if (response?.upsertedCount == 1) {
      res.status(200).json({ msg: "article updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const response = await db
      .collection("papers")
      .deleteOne({ _id: ObjectId(id) });

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "Article was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Article was not deleted" });
    }
  }
});
