import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  if (req.method == "GET") {
    try {
      const { db } = await connectToDatabase();

      const members = await db
        .collection("members")
        .find({ role: "manager" || "admin" })
        .toArray();

      console.log("members", members);

      if (members?.length >= 0) {
        res.status(200).json(members);
      } else {
        res.status(400).json({ msg: "There are no members" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};
