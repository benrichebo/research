import { connectToDatabase } from "../../../lib/mongodb";
import { authenticate } from "../authentication";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { role } = await verifyUser(req);
  const { document } = req.query;
  const method = req.method;
  try {
    if (method !== "GET") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    console.log("role", role);

    if (role == "admin" || role == "manager") {
      const { db } = await connectToDatabase();
      const response = await db.collection(document).countDocuments();

      console.log(response);
      res.status(200).json({ count: response });
    } else {
      res.status(400).json({ msg: "You are not allowed to access this data" });
      return;
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
