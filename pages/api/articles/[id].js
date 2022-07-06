import { ObjectId } from "mongodb";
import { findOne } from "../db/find";
import { insertToArray, removeFromArray } from "../db/update";
import { verifyUser } from "../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const article = await findOne("articles", {
      _id: ObjectId(userId),
      "articles.id": id,
    });

    if (article?.id) {
      res.status(200).json(article);
    } else {
      res.status(400).json({ msg: "There is no articles" });
    }
  }

  if (req.method == "PUT") {
    const { name, price, description, main, sub } = JSON.parse(req.body);
    const data = {
      $set: {
        "articles.$[elem].name": name,
        "articles.$[elem].description": description,
        "articles.$[elem].price": price,
        "articles.$[elem].main": main,
        "articles.$[elem].sub": sub,
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
      res.status(200).json({ msg: "article updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { articles: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "article was successfully deleted" });
    } else {
      res.status(400).json({ msg: "article was not deleted" });
    }
  }
};
