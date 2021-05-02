import client from "@/common/utils/client";

export default async (req: any, res: any) => {
	if (req.method === "GET") {
		try {
			const balance = await client.get(`${process.env.SERVER_URL}/payment/stripe/get_balance`)
			res.status(201).json(balance)
		} catch (err) {
			res.status(500).json({ statusCode: err.status, message: err.message });
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
};
