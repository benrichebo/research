import { ObjectId } from "mongodb";
import { findOne } from "../../db/find";
import { insertToArray, removeFromArray } from "../../db/update";
import { verifyUser } from "../../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  if (req.method == "GET") {
    const collaborator = await findOne("tasks", {
      _id: ObjectId(userId),
      "collaborators.id": id,
    });

    if (collaborator?.id) {
      res.status(200).json(collaborator);
    } else {
      res.status(400).json({ msg: "There is no collaborator" });
    }
  }

  if (req.method == "PUT") {
    const { email, name } = JSON.parse(req.body);
    const data = {
      $set: {
        "collaborators.$[elem].name": name,
        "collaborators.$[elem].email": email,
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
      res.status(200).json({ msg: "Collaborator updated successfully" });
    } else {
      statusCode404(res);
    }
  }

  if (method == "DELETE") {
    const set = { $pull: { collaborators: { id: id } } };

    //delete account
    const response = await removeFromArray(
      collection,
      {
        _id: ObjectId(userId),
      },
      set
    );
    if (response.matchedCount === 1) {
      res.status(200).json({ msg: "Collaborator was successfully deleted" });
    } else {
      res.status(400).json({ msg: "Collaborator was not deleted" });
    }
  }
};
