import { ObjectId } from "mongodb";
import { authenticate } from "../authentication";
import { findOne } from "../db/find";
import { insertToArray, removeFromArray } from "../db/update";

import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const paper = await findOne("papers", {
      _id: ObjectId(userId),
      "papers.id": id,
    });

    if (paper?.id) {
      res.status(200).json(paper);
    } else {
      res.status(400).json({ msg: "There is no papers" });
    }
  }

  if (req.method == "PUT") {
    const { name, price, description, main, sub } = JSON.parse(req.body);
    const data = {
      $set: {
        "papers.$[elem].name": name,
        "papers.$[elem].description": description,
        "papers.$[elem].price": price,
        "papers.$[elem].main": main,
        "papers.$[elem].sub": sub,
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
      res.status(200).json({ msg: "paper updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { papers: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "paper was successfully deleted" });
    } else {
      res.status(400).json({ msg: "paper was not deleted" });
    }
  }
});
