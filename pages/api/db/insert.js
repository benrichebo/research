import { connectToDatabase } from "../../../lib/mongodb";

export const insertOne = async (res, collection, query) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).insertOne(query);
    return result;
  } catch (error) {
    return { msg: "Internal server error" };
  }
};
