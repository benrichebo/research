import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  try {
    const { db } = await connectToDatabase();

    const DOCUMENT = db.collection("documents");

    if (req.method == "GET") {
      const document = await DOCUMENT.findOne({
        _id: ObjectId(userId),
        "documents.id": id,
      });

      if (document?.id) {
        res.status(200).json(document);
      } else {
        res.status(400).json({ info: "there is no invoice" });
      }
    }

    if (req.method == "PUT") {
      const { type, document } = JSON.parse(req.body);

      const data = {
        $set: {
          "documents.$[elem].type": type,
          "documents.$[elem].document": document,
        },
      };

      const results = await DOCUMENT.updateOne(
        { _id: ObjectId(userId) },
        data,
        { arrayFilters: [{ "elem.id": id }] },
        {
          upsert: true,
        }
      );

      if (results.matchedCount === 1) {
        res.status(200).json({ msg: "document updated successfully" });
      } else {
        res.status(400).json({ info: "document update failed" });
      }
    }

    if (method == "DELETE") {
      const deleteData = { $pull: { documents: { id: id } } };

      //delete account
      const response = await DOCUMENT.updateOne(
        {
          _id: ObjectId(userId),
        },
        deleteData
      );
      if (response.matchedCount === 1) {
        res.status(200).json({ msg: "document was successfully deleted" });
      } else {
        res.status(400).json({ info: "document was not deleted" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
