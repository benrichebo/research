import { authenticate } from "../authentication";
import { verifyUser } from "../verification";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);
  console.log("role", role);

  if (userId) {
    if (req.method == "GET") {
      try {
        const { db } = await connectToDatabase();

        let papers = [];
        if (role == "admin" || role == "manager") {
          papers = await db.collection("papers").find().toArray();
        } else {
          papers = await db.collection("papers").find({ userId }).toArray();
        }

        if (papers?._id || papers?.length >= 0) {
          res.status(200).json(papers);
        } else {
          res.status(400).json({ msg: "There are no papers" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
