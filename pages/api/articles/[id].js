import { ObjectId } from "mongodb";
import { insertToArray, removeFromArray } from "../db/update";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const articles = await db.collection("articles").findOne().toArray();

    if (articles >= 0) {
      res.status(200).json(articles);
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
