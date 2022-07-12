import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId && role == "admin") {
    if (req.method == "GET") {
      try {
        const { db } = await connectToDatabase();

        const conferences = await db.collection("conferences").find().toArray();

        if (conferences?.length >= 0) {
          res.status(200).json(conferences);
        } else {
          res.status(400).json({ msg: "There are no conferences" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
