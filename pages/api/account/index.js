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

      res.status(200).json({ ...user, id: user?._id });
    }

    if (userId && method == "PUT") {
      const response = await db
        .collection("members")
        .updateOne({ _id: ObjectId(userId) }, { $set: { ...req.body } });

       if (response?.acknowledged) {
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
           id: results?._id,
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
    res.status(500).json({ msg: "Internal server error" });
  }
});
