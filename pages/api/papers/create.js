import { authenticate } from "../authentication";
import moment from "moment";
import { verifyUser } from "../verification";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  const method = req.method;
  const { db } = await connectToDatabase();

  const body = JSON.parse(req.body);

  try {
    //2. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    const date = new Date();

    const paper = {
      ...body,
      userId,
      status: "pending approval",
      createdAt: moment(date).format("lll"),
    };

    const result = await db.collection("papers").insertOne(paper);

    if (result.acknowledged) {
      res.status(201).json({ msg: "Paper added successfully" });
    } else {
      res.status(201).json({ msg: "adding papers failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  } finally {
    res.end();
  }
});
