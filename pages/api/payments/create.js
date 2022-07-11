import { authenticate } from "../authentication";
import moment from "moment";
import { verifyUser } from "../verification";
import { ObjectId } from "mongodb";
import { insertToArray } from "../db/update";
//import stripe from "stripe"

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  const collection = "payments";

  const method = req.method;

  try {
    //1. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    const body = JSON.parse(req.body);

    //3. insert data into company collection
    const date = new Date();

    const payment = {
      ...body,
      userId,
      createdAt: moment(date).format("lll"),
    };

    const data = {
      $push: { payments: payment },
    };

    const response = await insertToArray(
      collection,
      { _id: ObjectId(userId) },
      data,
      { upsert: true }
    );

    if (response.matchedCount === 1) {
      res.status(201).json({ msg: "payment added successfully" });
    } else {
      res.status(401).json({ msg: "Adding payment failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
