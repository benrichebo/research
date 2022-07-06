/**
 * description: allows management stores to login
 * params email: string, password: string
 * functions find: function, createJwt: function,
 * send response with {authToken: {email: string, role: string, userId: string, apiKey: string}}
 */
import { compare } from "bcrypt";
import { findOne } from "../db/find";
import { createJwt } from "../jwt";

export default async (req, res) => {
  const { email, password } = JSON.parse(req.body);

  //1. check for method
  //if method does not exist
  if (req.method !== "POST") {
    res.status(400).json({ msg: "Invalid credentials" });
  }

  //2. find if user exist in db using email address
  const results = await findOne(res, "stores", { email });

  //3. compare the results password to the req password
  if (results?.password) {
    const match = await compare(password, results?.password);
    //4. if user exist, create jwt
    if (match) {
      const { _id } = results;

      const jwt = createJwt({
        userId: _id,
      });

      const data = {
        authToken: jwt,
      };

      res.status(200).json(data);
    } else {
      //5. if user doesn't exist, send error
      res.status(400).json({ msg: "Invalid credentials" });
    }
  } else {
    res.status(404).json({ msg: "Email does not exist" });
  }
};
