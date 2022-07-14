/**
 * description: allows store to sign up
 * params email: string, password: string
 * functions find: function, createJwt: function,
 * send response with {authToken: {email: string, role: string, userId: string, apiKey: string}}
 */
import { genSalt, hash } from "bcrypt";
import moment from "moment";
import { connectToDatabase } from "../../../lib/mongodb";
import { createJwt } from "../jwt";

export default async (req, res) => {
  const { name, email, city, password, agree } = JSON.parse(req.body);
  console.log(name, email, city, password, agree);

  //1. check for method
  //if method does not exist
  if (req.method !== "POST") {
    res.status(400).json({ msg: "Invalid method" });
    return;
  }

  try {
    const { db } = await connectToDatabase();

    const results = await db
      .collection("members")
      .findOne({ email }, { projection: { email: 1 } });

    //3. compare the results password to the req password
    if (!results?.email) {
      //hash password
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      const date = new Date();

      const userData = {
        name,
        city,
        email,
        agree,
        role: "member",
        password: hashedPassword,
        createdAt: moment(date).format("lll"),
        verifiedEmail: false,
        verified,
      };

      const response = await db.collection("members").insertOne(userData);

      console.log("response", response);
      //fetch user after signup
      if (response.acknowledged === true) {
        const results = await db
          .collection("members")
          .findOne({ email }, { projection: { password: 0 } });

        const jwt = createJwt({
          userId: results?._id,
          role: results?.role,
          email: results?.email,
          verified: results?.verified,
        });

        const data = {
          authToken: jwt,
          role: results?.role,
          email: results?.email,
          name: results?.name,
          verified: results?.verified,
        };

        res.status(201).json(data);
      } else {
        res.status(400).json({ msg: "Creating user failed" });
      }
    } else {
      res.status(404).json({ msg: "User with email already exist" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
