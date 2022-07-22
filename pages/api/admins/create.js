import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const method = req.method;

  try {
    //2. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }
    const { db } = await connectToDatabase();

    const body = JSON.parse(req.body);

    const { id, role } = body;

    const response = await db
      .collection("members")
      .updateOne({ _id: ObjectId(id) }, { $set: { role } });
    console.log("response", response);
    if (response?.acknowledged) {
      res.status(200).json({ msg: "admin added successfully" });
    } else {
      res.status(400).json({ msg: "adding admin failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
