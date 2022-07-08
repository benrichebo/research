import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { createJwt } from "../jwt";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const method = req.method;
  try {
    const { db } = await connectToDatabase();

    if (userId && method == "GET") {
      const user = await db
        .collection("members")
        .findOne({ _id: ObjectId(userId) }, { projection: { password: 0 } });

      res.status(200).json(user);
    }

    if (userId && method == "PUT") {
      const response = await db
        .collection("members")
        .findOneAndUpdate({ _id: ObjectId(userId) }, req.body);

      if (response?.upsertedCount == 1) {
        const user = await findOne("members", { _id: ObjectId(userId) });

        const { _id } = user;

        const jwt = createJwt({
          userId: _id,
        });

        const data = {
          authToken: jwt,
        };

        res.status(200).json(data);
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
    res.status(500).json({ msg: "Internal server error" });
  }
};
