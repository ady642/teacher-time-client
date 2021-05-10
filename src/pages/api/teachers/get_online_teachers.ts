import axios from "axios";

export default async (req: Request, res: any) => {
	if (req.method === "GET") {
		try {
			const { data: teachers} = await axios.get(`${process.env.SERVER_URL}/teachers`)
			res.status(200).send(teachers)
		} catch (err) {
			res.status(500).json({ statusCode: 500, message: err.message });
		}
	} else {
		res.setHeader("Allow", "GET");
		res.status(405).end("Method Not Allowed");
	}
};
