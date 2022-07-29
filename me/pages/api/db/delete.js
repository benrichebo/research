import { connectToDatabase } from "../../../lib/mongodb";

export const deleteOne = async (collection, query) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).deleteOne(query);
    console.log("delete results", result);
    return result;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
