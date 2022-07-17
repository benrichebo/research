import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  if (req.method == "GET") {
    try {
      const { db } = await connectToDatabase();

      const papers = await db
        .collection("papers")
        .find({}, { title: 1, publisher: 1 })
        .toArray();

      if (papers?.length >= 0) {
        res.status(200).json(papers);
      } else {
        res.status(400).json({ msg: "There are no papers" });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
};
