import { ObjectId } from "mongodb";
import { authenticate } from "../../authentication";
import { connectToDatabase } from "../../../../lib/mongodb";
import { verifyUser } from "../../verification";

export default authenticate(async (req, res) => {
  const method = req.method;

  const { userId } = await verifyUser(req);

  const { verified } = JSON.parse(req.body);

  const { id } = req.query;

  try {
    //2. check for method
    //if method does not exist
    if (method !== "PUT") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    const { db } = await connectToDatabase();

    const result = await db
      .collection("members")
      .updateOne({ _id: ObjectId(id) }, { $set: { verified: verified } });

    if (result.acknowledged) {
      res.status(201).json({ msg: "Account verified successfully" });
    } else {
      res.status(201).json({ msg: "Account verification failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
