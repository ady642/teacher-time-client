import Stripe from "stripe";
import client from "@/common/utils/client";

const stripe = new Stripe(process.env.SECRET_STRIPE_KEY, { apiVersion: "2020-08-27" });

export default async (req: any, res: any) => {
    if (req.method === "GET") {
        try {
            const customer = await client.get(`${process.env.BASE_URL}/payment/stripe/get_customer_by_email/`)
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};
