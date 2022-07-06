/**
 * description: allows store to sign up
 * params email: string, password: string
 * functions find: function, createJwt: function,
 * send response with {authToken: {email: string, role: string, userId: string, apiKey: string}}
 */
import { genSalt, hash } from "bcrypt";
import moment from "moment";
import { findOne } from "../db/find";
import { insertOne } from "../db/insert";
import { createJwt } from "../jwt";

export default async (req, res) => {
  const { storeName, city, businessType, email, password } = JSON.parse(req.body);

  //1. check for method
  //if method does not exist
  if (req.method !== "POST") {
    res.status(400).json({ msg: "Invalid method" });
    return
  }

  //2. find if user exist in db using email address
  const results = await findOne(
    res,
    "stores",
    { email },
    {
      projection: { email: 1 },
    }
  );

  //3. compare the results password to the req password
  if (!results?.email) {
    //hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const date = new Date();

    const userData = {
      storeName,
      city,
      businessType,
      email,
      password: hashedPassword,
      createdAt: moment(date).format("lll"),
      verifiedEmail: false,
    };

    const response = await insertOne(res, "stores", userData);
    //fetch user after signup
    if (response.acknowledged === true) {
      const { _id } = response;
      const jwt = createJwt({
        userId: _id,
      });

      const data = {
        authToken: jwt,
      };

      res.status(200).json(data);
    } else {
      res.status(404).json({ msg: "Signing up failed" });
    }
  } else {
    res.status(404).json({ msg: "Store with email already exist" });
  }
};
