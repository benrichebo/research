import { getStripeId } from "./getStripeId";

export default async (req, res) => {
  //fetch client secret from stripe
  const response = await getStripeId(req);
  console.log(response)

  if (!response?.msg) {
    res.status(201).json({ id: response });
  } else {
    res.status(400).json({ msg: response?.msg });
  }
};
