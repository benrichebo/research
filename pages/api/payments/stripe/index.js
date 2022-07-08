import { createPaymentIntent } from "./createPaymentIntent";

export default async (req, res) => {
  try {
    //fetch client secret from stripe
    const response = await createPaymentIntent();

    if (response?.clientSecret) {
      res.status(201).json({ clientSecret: response?.clientSecret });
    } else {
      res
        .status(400)
        .json({ msg: "There was an error creating payment intent" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};
