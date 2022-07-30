import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {

  if (req.method == "GET") {
    try {
      const { db } = await connectToDatabase();

      const categories = await db.collection("categories").find().toArray();

      console.log("categories", categories);

      if (categories?.length >= 0) {
        res.status(200).json(categories);
      } else {
        res.status(400).json({ msg: "There are no categories" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};
