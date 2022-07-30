import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export const stripePayment = async () => {
  const items = [{ id: 1, quantity: 1 }];
  try {
    //organization items
    const organizationItems = new Map([
      [1, { priceInCents: 15000, name: "membership" }],
      [2, { priceInCents: 15000, name: "subscription" }],
    ]);

    //2. stripe payment integration
    const session = await stripe?.checkout?.sessions?.create({
      payment_method_types: ["card"],
      mode: "payment", //it can be "subscription" for recurring payments only
      line_items: items?.map((item) => {
        const checkOutItem = organizationItems.get(item?.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: checkOutItem?.name,
            },
            unit_amount: checkOutItem?.priceInCents,
          },
          quantity: item?.quantity,
        };
      }),
      success_url: `${process.env.SERVER_URL}/dashboard/payments`,
      cancel_url: `${process.env.SERVER_URL}/dashboard/payments`,
    });

    //send url to client for payment
    return { url: session?.url };
  } catch (error) {
    return error.message;
  }
};
