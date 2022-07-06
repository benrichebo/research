import { authenticate } from "../authentication";
import { findOne } from "../db/find";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  if (userId) {
    if (req.method == "GET") {
      const products = await findOne(
        "products",
        { _id: ObjectId(userId) },
        { projection: { products: 1 } }
      );

      if (products?._id) {
        res.status(200).json(products);
      } else {
        res.status(400).json({ msg: "There are no products" });
      }
    }
  } else {
    res.status(400).json({ msg: "Invalid method" });
  }
});
