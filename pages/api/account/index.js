import { ObjectId } from "mongodb";
import { deleteOne } from "../db/delete";
import { findOne } from "../db/find";
import { findOneAndUpdate } from "../db/update";
import { createJwt } from "../jwt";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const method = req.method;

  if (userId && method == "GET") {
    const user = await findOne(
      "stores",
      { _id: ObjectId(userId) },
      { projection: { password: 0 } }
    );

    res.status(200).json(user);
  }

  if (userId && method == "PUT") {
    //1. check for method
    const response = await findOneAndUpdate(
      "stores",
      { _id: ObjectId(userId) },
      req.body
    );

    if (response?.upsertedCount == 1) {
      const user = await findOne("stores", { _id: ObjectId(userId) });

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
    const response = await deleteOne("stores", { _id: ObjectId(userId) });

    if (response.deletedCount === 1) {
      res.status(200).json({ msg: "Store was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Store was not deleted" });
    }
  }
};
