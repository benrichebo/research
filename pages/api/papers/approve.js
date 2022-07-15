import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { connectToDatabase } from "../../../lib/mongodb";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const method = req.method;

  const { userId } = await verifyUser(req);

  const { status } = JSON.parse(req.body);

  try {
    //2. check for method
    //if method does not exist
    if (method !== "PUT") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    const { db } = await connectToDatabase();

    const result = await db
      .collection("papers")
      .updateOne({ _id: ObjectId(userId) }, { $set: { status: status } });

    if (result.acknowledged) {
      res.status(201).json({ msg: "Paper approved successfully" });
    } else {
      res.status(201).json({ msg: "Paper approval failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
