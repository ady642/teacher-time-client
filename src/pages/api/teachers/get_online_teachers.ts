import axios from "axios";

export default async (req: Request, res: any) => {
	if (req.method === "GET") {
		try {
			console.log(req.headers.values())
			const onlineTeachers = await axios.get(`${process.env.SERVER_URL}/teachers`, {
				headers: {
					authorization: req.headers.get('authorization')
				}
			})
			console.log(onlineTeachers)
			res.status(200).send(onlineTeachers);
		} catch (err) {
			res.status(500).json({ statusCode: 500, message: err.message });
		}
	} else {
		res.setHeader("Allow", "GET");
		res.status(405).end("Method Not Allowed");
	}
};
