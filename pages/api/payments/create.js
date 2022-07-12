import { authenticate } from "../authentication";
import moment from "moment";
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

    const date = new Date();

    const payment = {
      ...body,
      userId,
      status: "pending approval",
      createdAt: moment(date).format("lll"),
    };

    const result = await db.collection("payments").insertOne(payment);

    if (result.acknowledged) {
      res.status(201).json({ msg: "payment added successfully" });
    } else {
      res.status(201).json({ msg: "adding payment failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
