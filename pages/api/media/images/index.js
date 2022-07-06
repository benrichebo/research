import { authenticate } from "../../authentication";
import { findOne } from "../../db/find";
import { verifyUser } from "../../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const media = await findOne(
        "media",
        { _id: ObjectId(userId) },
        { projection: { media: 1 } }
      );

      if (media?._id) {
        res.status(200).json(media);
      } else {
        res.status(400).json({ msg: "There are no media" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
