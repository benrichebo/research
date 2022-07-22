import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if ((userId && role == "admin") || role == "manager") {
    if (req.method == "GET") {
      try {
        const { db } = await connectToDatabase();

        const members = await db
          .collection("members")
          .find({}, { projection: { name: 1, status: 1, email: 1 } })
          .toArray();

        console.log("members", members);

        if (members?.length >= 0) {
          res.status(200).json(members);
        } else {
          res.status(400).json({ msg: "There are no members" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
