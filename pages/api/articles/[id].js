import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  try {
    const { db } = await connectToDatabase();

    const { id } = req.query;

    if (req.method == "GET") {
      const article = await db
        .collection("articles")
        .findOne({ _id: ObjectId(id) });

      if (article?._id) {
        res.status(200).json(article);
      } else {
        res.status(400).json({ msg: "There is no article" });
      }
    }

    if (req.method == "PUT") {
      const body = JSON.parse(req.body);

      const response = await db
        .collection("articles")
        .updateOne({ _id: ObjectId(id) }, { $set: { ...body } });
    
      if (response?.acknowledged) {
        res.status(200).json({ msg: "article updated successfully" });
      } else {
        res.status(400).json({ msg: "article update failed" });
      }
    }

    if (req.method == "DELETE") {
      const response = await db
        .collection("articles")
        .deleteOne({ _id: ObjectId(id) });

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "Article was successfully deleted" });
      } else {
        res.status(400).json({ msg: "Article was not deleted" });
      }
    }
  } catch (error) {
     res.status(500).json({ msg: "Internal server error" });
  }
});
