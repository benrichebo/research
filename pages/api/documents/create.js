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

    const document = {
      ...body, //specific document, like the cv
      createdAt: moment(date).format("lll"),
    };

    const data = {
      $push: { documents: document },
    };

    //1. insert data into shop collection
    const response = await db
      .collection("documents")
      .updateOne({ _id: ObjectId(userId) }, data, {
        upsert: true,
      });

    if (response.matchedCount === 1) {
      res.status(201).json({ msg: "document added successfully" });
    } else {
      res.status(201).json({ msg: "adding document failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  } finally {
    res.end();
  }
});
