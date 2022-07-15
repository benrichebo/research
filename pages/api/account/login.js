/**
 * description: allows management stores to login
 * params email: string, password: string
 * functions find: function, createJwt: function,
 * send response with {authToken: {email: string, role: string, userId: string, apiKey: string}}
 */
import { compare } from "bcrypt";
import { connectToDatabase } from "../../../lib/mongodb";
import { createJwt } from "../jwt";

export default async (req, res) => {
  const { email, password } = JSON.parse(req.body);

  //1. check for method
  //if method does not exist
  if (req.method !== "POST") {
    res.status(400).json({ msg: "Invalid credentials" });
  }

  try {
    const { db } = await connectToDatabase();

    const results = await db.collection("members").findOne({ email });

    if (results?.password) {
      const match = await compare(password, results?.password);
      if (match) {
        const { _id, role, email, name, verified } = results;
        const jwt = createJwt({
          userId: _id,
          role,
          email,
        });

        const data = {
          authToken: jwt,
          role,
          email,
          name,
          id: _id,
          verified,
        };

        res.status(200).json(data);
      } else {
        //5. if user doesn't exist, send error
        res.status(400).json({ msg: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ msg: "Email does not exist" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error"});
  }
};
