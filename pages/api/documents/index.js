import { connectToDatabase } from "../../../lib/mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  try {
    const { db } = await connectToDatabase();
    if (req.method == "GET") {
      const documents = await db
        .collection("documents")
        .findOne({ _id: ObjectId(userId) }, { projection: { documents: 1 } });

      if (documents?._id) {
        res.status(200).json(documents);
      } else {
        res.status(400).json({ msg: "There are no documents" });
      }
    } else {
      res.status(400).json({ msg: "Invalid method" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});
