import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_STRIPE_KEY, { apiVersion: "2020-08-27" });

export default async (req: any, res: any) => {
	if (req.method === "POST") {
		try {
			const { amount, user: { email } } = req.body;

			await stripe.customers.create({email})

			const paymentIntent = await stripe.paymentIntents.create({
				amount,
				currency: "eur"
			});

			res.status(200).send(paymentIntent.client_secret);
		} catch (err) {
			res.status(500).json({ statusCode: 500, message: err.message });
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
};
