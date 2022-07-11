import { authenticate } from "../authentication";
import { findAll, findOne } from "../db/find";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId, role } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      let papers = [];
      if (role == "admin") {
        papers = await findAll("papers", {});
      } else {
        papers = await findOne(
          "papers",
          { _id: ObjectId(userId) },
          { projection: { papers: 1 } }
        );
      }

      if (papers?._id || papers?.length >= 0) {
        res.status(200).json(papers);
      } else {
        res.status(400).json({ msg: "There are no papers" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
