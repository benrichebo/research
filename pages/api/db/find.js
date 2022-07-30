import { connectToDatabase } from "../../../lib/mongodb";

export const find = async (res, collection, filter, projection) => {
  try {
    const { db } = await connectToDatabase();
    const results = await db
      .collection(collection)
      .find(filter, projection)
      .toArray();
    //console.log(results)
    return results;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};

export const findOne = async (res, collection, filter, projection) => {
  try {
    const { db } = await connectToDatabase();
    const results = await db.collection(collection).findOne(filter, projection);
    //console.log(results)
    return results;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};

export const findAll = async (
  res,
  collection,
  filter,
  projection,
  numberOfItems
) => {
  try {
    const { db } = await connectToDatabase();
    const results = await db
      .collection(collection)
      .find(filter, projection)
      .toArray(numberOfItems);

    return results;
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    return
  }
};
