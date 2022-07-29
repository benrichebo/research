import { authenticate } from "../../authentication";
import { findOne } from "../../db/find";
import { verifyUser } from "../../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const extras = await findOne(
        "products",
        { _id: ObjectId(userId) },
        { projection: { extras: 1 } }
      );

      if (extras?._id) {
        res.status(200).json(extras);
      } else {
        res.status(400).json({ msg: "There are no extras" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
