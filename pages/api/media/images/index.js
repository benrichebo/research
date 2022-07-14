import { connectToDatabase } from "../../../../lib/mongodb";
import { authenticate } from "../../authentication";
import { verifyUser } from "../../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      try {
        const { db } = await connectToDatabase();

        const media = await db.collection("media").find().toArray();

        console.log("media", media);

        if (media?.length >= 0) {
          res.status(200).json(media);
        } else {
          res.status(400).json({ msg: "There are no media" });
        }
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
