import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { insertToArray, removeFromArray } from "../db/update";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const product = await findOne("products", {
      _id: ObjectId(userId),
      "products.id": id,
    });

    if (product?.id) {
      res.status(200).json(product);
    } else {
      res.status(400).json({ msg: "There is no products" });
    }
  }

  if (req.method == "PUT") {
    const { name, price, description, main, sub } = JSON.parse(req.body);
    const data = {
      $set: {
        "products.$[elem].name": name,
        "products.$[elem].description": description,
        "products.$[elem].price": price,
        "products.$[elem].main": main,
        "products.$[elem].sub": sub,
      },
    };

    const results = await insertToArray(
      collection,
      { _id: ObjectId(userId) },
      data,
      { arrayFilters: [{ "elem.id": id }] },
      {
        upsert: true,
      }
    );

    if (results.matchedCount === 1) {
      res.status(200).json({ msg: "Product updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { products: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "Product was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Product was not deleted" });
    }
  }
};
