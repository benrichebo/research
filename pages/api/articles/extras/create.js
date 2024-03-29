import { authenticate } from "../../authentication";
import moment from "moment";
import { verifyUser } from "../../verification";
import { ObjectId } from "mongodb";
import { insertToArray } from "../../db/update";

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  const collection = "products";

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

    const extra = {
      ...body,
      createdAt: moment(date).format("lll"),
    };

    const data = {
      $push: { extras: extra },
    };

    //5. insert data into company collection
    const response = await insertToArray(
      collection,
      { _id: ObjectId(userId) },
      data,
      { upsert: true }
    );

    if (response.matchedCount === 1) {
      res.status(201).json({ msg: "extra added successfully" });
    } else {
      res.status(401).json({ msg: "Adding extra failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
