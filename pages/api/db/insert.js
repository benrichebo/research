import { connectToDatabase } from "../../../lib/mongodb";

export const insertOne = async (res, collection, query) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).insertOne(query);
    return result;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};
