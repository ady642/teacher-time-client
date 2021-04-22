import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_STRIPE_KEY, { apiVersion: "2020-08-27" });

export default async (req: any, res: any) => {
    if (req.method === "GET") {
        try {
            const customer = await stripe.customers.retrieve(req.query.id)

            res.status(200).send(customer);
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};
