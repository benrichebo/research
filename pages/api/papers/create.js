import { authenticate } from "../authentication";
import moment from "moment";
import { verifyUser } from "../verification";
import { ObjectId } from "mongodb";
import { insertToArray } from "../db/update";

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  const method = req.method;

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
      createdAt: moment(date).format("lll"),
    };

    const data = {
      $push: { papers: paper },
    };

    const result = await db
      .collection("papers")
      .updateOne({ _id: ObjectId(userId) }, data, {
        upsert: true,
      });

    if (result.acknowledged) {
      res.status(201).json({ msg: "papers added successfully" });
    } else {
      res.status(201).json({ msg: "adding papers failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
