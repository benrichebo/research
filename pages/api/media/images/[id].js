import { ObjectId } from "mongodb";
import { findOne } from "../../db/find";
import { removeFromArray } from "../../db/update";
import { verifyUser } from "../../verification";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  const collection = "media";

  if (req.method == "GET") {
    const media = await findOne(res, collection, {
      _id: ObjectId(userId),
      "media.public_id": id,
    });

    if (media?.id) {
      res.status(200).json(media);
    } else {
      res.status(400).json({ msg: "There is no media" });
    }
  }

  if (method == "DELETE") {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    await cloudinary.uploader.destroy(id, async (err, result) => {
      //remove to media
      const set = { $pull: { media: { public_id: id } } };

      //delete account
      const response = await removeFromArray(
        res,
        collection,
        {
          _id: ObjectId(userId),
        },
        set
      );
      if (response.matchedCount === 1) {
        res.status(200).json({ msg: "media was successfully deleted" });
      } else {
        res.status(400).json({ msg: "media was not deleted" });
      }
    });
  }
};
