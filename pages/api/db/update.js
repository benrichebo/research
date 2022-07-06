import { connectToDatabase } from "../../../lib/mongodb";

export const update = async (res, collection, filter, update) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection(collection).updateOne(filter, update);
    return result;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};

//returns data
export const findOneAndUpdate = async (
  res,
  collection,
  filter,
  update,
  projection
) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db
      .collection(collection)
      .findOneAndUpdate(filter, update, projection);

    return result;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};

export const insertToArray = async (res, collection, filter, update, options) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db
      .collection(collection)
      .updateOne(filter, update, options);
    return result;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};

export const removeFromArray = async (res, collection, condition, set, filter) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db
      .collection(collection)
      .update(condition, set, filter);
    return result;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};
