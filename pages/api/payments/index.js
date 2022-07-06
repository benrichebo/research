import { authenticate } from "../authentication";
import { findOne } from "../db/find";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const publications = await findOne(
        "publications",
        { _id: ObjectId(userId) },
        { projection: { publications: 1 } }
      );

      if (publications?._id) {
        res.status(200).json(publications);
      } else {
        res.status(400).json({ msg: "There are no publications" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
