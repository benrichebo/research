import { authenticate } from "../authentication";
import { connectToDatabase } from "../../../lib/mongodb";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const method = req.method;

  const { userId } = await verifyUser(req);

  const body = JSON.parse(req.body);

  try {
    //2. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }
    const { db } = await connectToDatabase();

    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(userId) },
        { verified: body?.verified }
      );

    if (result.acknowledged) {
      res.status(201).json({ msg: "account verified successfully" });
    } else {
      res.status(201).json({ msg: "account verification failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
