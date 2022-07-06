import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { insertToArray, removeFromArray } from "../db/update";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const publication = await findOne("publications", {
      _id: ObjectId(userId),
      "publications.id": id,
    });

    if (publication?.id) {
      res.status(200).json(publication);
    } else {
      res.status(400).json({ msg: "There is no publications" });
    }
  }

  if (req.method == "PUT") {
    const { name, price, description, main, sub } = JSON.parse(req.body);
    const data = {
      $set: {
        "publications.$[elem].name": name,
        "publications.$[elem].description": description,
        "publications.$[elem].price": price,
        "publications.$[elem].main": main,
        "publications.$[elem].sub": sub,
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
      res.status(200).json({ msg: "publication updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { publications: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "publication was successfully deleted" });
    } else {
      res.status(400).json({ msg: "publication was not deleted" });
    }
  }
};
