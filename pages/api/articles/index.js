import { authenticate } from "../authentication";
import { findOne } from "../db/find";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const articles = await findOne(
        "articles",
        { _id: ObjectId(userId) },
        { projection: { articles: 1 } }
      );

      if (articles?._id) {
        res.status(200).json(articles);
      } else {
        res.status(400).json({ msg: "There are no articles" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
