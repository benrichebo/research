import { authenticate } from "../authentication";
import moment from "moment";
import { connectToDatabase } from "../../../lib/mongodb";
import { genSalt, hash } from "bcrypt";

export default authenticate(async (req, res) => {
  const method = req.method;

  const body = JSON.parse(req.body);

  try {
    //2. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }
    const { db } = await connectToDatabase();

    const results = await db
      .collection("members")
      .findOne({ email: body?.email }, { projection: { email: 1 } });

    //3. compare the results password to the req password
    if (!results?.email) {
      const date = new Date();

      //hash password
      const salt = await genSalt(10);
      const hashedPassword = await hash(body?.password, salt);

      const admin = {
        name: body?.name,
        email: body?.email,
        role: body?.role,
        revealed_password: body?.password,
        password: hashedPassword,
        createdAt: moment(date).format("lll"),
      };

      const result = await db.collection("members").insertOne(admin);

      if (result.acknowledged) {
        res.status(201).json({ msg: "admin added successfully" });
      } else {
        res.status(201).json({ msg: "adding admin failed" });
      }
    } else {
      res.status(404).json({ msg: "Admin with email already exist" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
