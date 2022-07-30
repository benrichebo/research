/**
 * description: allows store to sign up
 * params email: string, password: string
 * functions find: function, createJwt: function,
 * send response with {authToken: {email: string, role: string, userId: string, apiKey: string}}
 */

import { stripePayment } from "../functions/stripe";

export default async (req, res) => {
  const stripe = await stripePayment(data);

  if (stripe?.url) {
    res.status(200).json({ url: stripe?.url });
  }
};
