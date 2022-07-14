import cloudinary from "cloudinary";
import { ObjectId } from "mongodb";
import { authenticate } from "../../authentication";
import { verifyUser } from "../../verification";
import { connectToDatabase } from "../../../../lib/mongodb";

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  const { db } = await connectToDatabase();

  //1. get method
  const method = req.method;

  const { name, width, height, uri, type } = JSON.parse(req.body);

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
        name,
        width,
        height,
        public_id,
        url,
        type
      };

      //push to media
      //5. insert data into company collection
      const response = await db
        .collection("media")
        .insertOne(data);

        console.log("media-response", response);

      if (response.acknowledged) {
        res.status(200).json({ name, width, height, public_id, url, type });
      } else {
        res.status(400).json({ msg: "Uploading to your media folder failed" });
      }
    } else {
      res.status(401).json({ msg: "Uploading to your media folder failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } 
});
