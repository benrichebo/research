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
      const category = await db
        .collection("categories")
        .findOne({ _id: ObjectId(id) });

      console.log("category found", category);

      if (category?._id) {
        res.status(200).json(category);
      } else {
        res.status(400).json({ msg: "There is no category" });
      }
    }

    if (req.method == "PUT") {
      const body = JSON.parse(req.body);

      const response = await db
        .collection("categories")
        .updateOne({ _id: ObjectId(id) }, { $set: { ...body } });
      console.log("response", response);
      if (response?.acknowledged) {
        res.status(200).json({ msg: "category updated successfully" });
      } else {
        statusCode404(res);
      }
    }

    if (method == "DELETE") {
      console.log("delete category");
      const response = await db
        .collection("categories")
        .deleteOne({ _id: ObjectId(id) });

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "category was successfully deleted" });
      } else {
        res.status(400).json({ msg: "category was not deleted" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
