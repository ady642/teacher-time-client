import client from "@/common/utils/client";

export default async (req: any, res: any) => {
	if (req.method === "GET") {
		try {
			const customer = await client.get(`${process.env.SERVER_URL}/payment/stripe/get_customer_by_email/`)
			res.status(201).json({customer})
		} catch (err) {
			res.status(500).json({ statusCode: 500, message: err.message });
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
};
