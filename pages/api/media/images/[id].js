import { ObjectId } from "mongodb";
import cloudinary from "cloudinary";
import { verifyUser } from "../../verification";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async (req, res) => {
  const { userId } = await verifyUser(req);

  const { id } = req.query;

  const { db } = await connectToDatabase();

  if (req.method == "GET") {
    const media = await db.collection("media").findOne({ _id: ObjectId(id) });

    if (media?._id) {
      res.status(200).json(media);
    } else {
      res.status(400).json({ msg: "There is no media" });
    }
  }

  if (req.method == "DELETE") {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    await cloudinary.uploader.destroy(id, async (err, result) => {
      //delete from media too
      const response = await db
        .collection("media")
        .deleteOne({ public_id: id });

      console.log(err, response);

      if (response.deletedCount === 1) {
        res.status(200).json({ msg: "media was successfully deleted" });
      } else {
        res.status(400).json({ msg: "media was not deleted" });
      }
    });
  }
};
