import { authenticate } from "../authentication";
import { findOne } from "../db/find";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const conferences = await findOne(
        "conferences",
        { _id: ObjectId(userId) },
        { projection: { conferences: 1 } }
      );

      if (conferences?._id) {
        res.status(200).json(conferences);
      } else {
        res.status(400).json({ msg: "There are no conferences" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
