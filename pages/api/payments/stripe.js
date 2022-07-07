import Stripe from "stripe";
const stripe = new Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx", {
  apiVersion: "2020-08-27",
});

export default async (req, res) => {
  //verify user

  const method = req.method;

  try {
    //1. check for method
    //if method does not exist
    if (method !== "POST") {
      res.status(400).json({ msg: "Invalid method" });
      return;
    }

    const body = JSON.parse(req.body);

    //organization items
    const organizationItems = new Map([
      ["#875m2", { priceCents: 15000, name: "membership" }],
      ["#875s2", { priceCents: 15000, name: "subscription" }],
    ]);

    //2. stripe payment integration
    const session = await stripe?.checkout?.create({
      payment_method_types: ["card"],
      mode: "payment", //it can be "subscription" for recurring payments only
      line_items: body?.map((item) => {
        const checkOutItem = organizationItems.get(item?.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: checkOutItem?.name,
            },
            unit_amount: checkOutItem?.priceCents,
          },
          quantity: item?.quantity,
        };
      }),
      success_url: `${process.env.SERVER_URL}/successful-payment`,
      cancel_url: `${process.env.SERVER_URL}/cancelled-payment`,
    });

    //send url to client for payment
    res.status(201).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  } finally {
    res.end();
  }
};
