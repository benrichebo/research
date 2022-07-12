import { ObjectId } from "mongodb";
import { insertToArray, removeFromArray } from "../db/update";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { db } = await connectToDatabase();

  const { id } = req.query;

  if (req.method == "GET") {
    const article = await db
      .collection("articles")
      .findOne({ _id: ObjectId(id) });

    if (article?._id) {
      res.status(200).json(article);
    } else {
      res.status(400).json({ msg: "There is no articles" });
    }
  }

  if (req.method == "PUT") {
    const body = JSON.parse(req.body);

    const response = await db
      .collection("articles")
      .findOneAndUpdate({ _id: ObjectId(id) }, body);

    if (response?.upsertedCount == 1) {
      res.status(200).json({ msg: "article updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const response = await db
      .collection("articles")
      .deleteOne({ _id: ObjectId(id) });

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "Article was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Article was not deleted" });
    }
  }
});
