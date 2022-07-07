import { authenticate } from "../authentication";
import moment from "moment";
import { verifyUser } from "../verification";
import { ObjectId } from "mongodb";
import { insertToArray } from "../db/update";
//import stripe from "stripe"

export default authenticate(async (req, res) => {
  //verify user
  const { userId } = await verifyUser(req);

  const collection = "payments";

  const method = req.method;

  try {
    //1. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    const body = JSON.parse(req.body)

    //organization items
    const organizationItems = new Map([
      ["#875m2", {priceCents: 15000, name: "membership"}],
      ["#875s2", {priceCents: 15000, name: "subscription"}]
    ])

    //2. stripe payment integration
    const session = await stripe?.checkout?.create({
      payment_method_types: ["card"],
      mode: "payment", //it can be "subscription"
      line_items: body?.map(item => {
        const checkOutItem = organizationItems.get(item?.id)

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: checkOutItem?.name
            },
            unit_amount: checkOutItem?.priceCents
          },
          quantity: item?.quantity,
        };
      }),
      success_url: `${process.env.SERVER_URL}/successful-payment`,
      cancel_url: `${process.env.SERVER_URL}/cancelled-payment`,
    });

    //session.url

    //3. insert data into company collection
    const date = new Date();

    const payment = {
      ...body,
      createdAt: moment(date).format("lll"),
    };

    const data = {
      $push: { payments: payment },
    };

    const response = await insertToArray(
      collection,
      { _id: ObjectId(userId) },
      data,
      { upsert: true }
    );

    if (response.matchedCount === 1) {
      res.status(201).json({ msg: "payment added successfully" });
    } else {
      res.status(401).json({ msg: "Adding payment failed" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
});
