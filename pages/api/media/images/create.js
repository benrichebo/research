import cloudinary from "cloudinary";
import { insertToArray } from "../../db/update";
import { authenticate } from "../../authentication";
import { verifyUser } from "../../verification";

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  //1. get method
  const method = req.method;

  const { name, width, height, uri } = JSON.parse(req.body);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    //2. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    let response = await cloudinary.uploader.upload(uri, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });

    const { public_id, url } = response;

    if (public_id) {
      const data = {
        $push: { media: { name, width, height, public_id, url } },
      };

      //push to media
      //5. insert data into company collection
      const response = await insertToArray(
        res,
        "media",
        { _id: ObjectId(userId) },
        data,
        { upsert: true }
      );

      if (response.matchedCount === 1) {
        res.status(200).json({ name, width, height, public_id, url });
      } else {
        res.status(400).json({ msg: "Uploading to your media folder failed" });
      }
    } else {
      res.status(401).json({ msg: "Uploading to your media folder failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  } finally {
    req.end();
  }
});
