import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
import { authenticate } from "../authentication";
import { createJwt } from "../jwt";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const method = req.method;

  try {
    const { db } = await connectToDatabase();

    console.log(method, userId);

    if (userId && method == "GET") {
      const user = await db
        .collection("members")
        .findOne({ _id: ObjectId(userId) }, { projection: { password: 0 } });

      console.log(user);

      res.status(200).json(user);
    }

    if (userId && method == "PUT") {
      const response = await db
        .collection("members")
        .findOneAndUpdate({ _id: ObjectId(userId) }, req.body);

      if (response?.upsertedCount == 1) {
        const results = await db
          .collection("members")
          .findOne({ email }, { projection: { password: 0 } });

        const jwt = createJwt({
          userId: results?._id,
          role: results?.role,
          email: results?.email,
          verified: results?.verified,
        });

        const data = {
          authToken: jwt,
          role: results?.role,
          email: results?.email,
          name: results?.name,
          verified: results?.verified,
        };

        res.status(201).json(data);
      } else {
        res.status(404).json({ msg: "Update failed" });
      }
    }

    if (userId && method == "DELETE") {
      const response = await db
        .collection("members")
        .deleteOne({ _id: ObjectId(userId) });

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "Member was successfully deleted" });
      } else {
        res.status(400).json({ msg: "Member was not deleted" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
