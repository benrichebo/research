import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { authenticate } from "../authentication";
import { insertToArray, removeFromArray } from "../db/update";
import { verifyUser } from "../verification";

export default authenticate(async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const conference = await findOne("conferences", {
      _id: ObjectId(userId),
      "conferences.id": id,
    });

    if (conference?.id) {
      res.status(200).json(conference);
    } else {
      res.status(400).json({ msg: "There is no conferences" });
    }
  }

  if (req.method == "PUT") {
    const { name, price, description, main, sub } = JSON.parse(req.body);
    const data = {
      $set: {
        "conferences.$[elem].name": name,
        "conferences.$[elem].description": description,
        "conferences.$[elem].price": price,
        "conferences.$[elem].main": main,
        "conferences.$[elem].sub": sub,
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
      res.status(200).json({ msg: "conference updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { conferences: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "conference was successfully deleted" });
    } else {
      res.status(400).json({ msg: "conference was not deleted" });
    }
  }
});
