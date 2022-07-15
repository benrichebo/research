import { authenticate } from "../authentication";
import moment from "moment";
import { connectToDatabase } from "../../../lib/mongodb";

export default authenticate(async (req, res) => {

  const method = req.method;

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

    const category = {
      ...body,
      createdAt: moment(date).format("lll"),
    };

    const result = await db.collection("categories").insertOne(category);

    if (result.acknowledged) {
      res.status(201).json({ msg: "category added successfully" });
    } else {
      res.status(201).json({ msg: "adding category failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
