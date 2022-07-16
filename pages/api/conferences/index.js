import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  if (req.method == "GET") {
    try {
      const { db } = await connectToDatabase();

      const conferences = await db.collection("conferences").find().toArray();

      console.log("conferences", conferences);

      if (conferences?.length >= 0) {
        res.status(200).json(conferences);
      } else {
        res.status(400).json({ msg: "There are no conferences" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};
