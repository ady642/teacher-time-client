export default async (req: any, res: any) => {
    if (req.method === "GET") {
        try {
            const onlineTeachers = [{
                "id": "1",
                "name": "Yves Haïk",
                "avatar": "/img/avatar.jpeg",
                "description": "10 years teaching inside the classroom and outside on the sports field - a great balance of English language. I am patient and funny.",
                "hasDiploma": true,
                "rating": 5
            }, {
                "id": "2",
                "name": "Gaston Haïk",
                "avatar": "/img/avatar.jpeg",
                "description": "10 years teaching inside the classroom and outside on the sports field - a great balance of English language. I am patient and funny.",
                "hasDiploma": true,
                "rating": 5
            }, {
                "id": "3",
                "name": "Adrien Haïk",
                "avatar": "/img/avatar.jpeg",
                "description": "10 years teaching inside the classroom and outside on the sports field - a great balance of English language. I am patient and funny.",
                "hasDiploma": false,
                "rating": 1
            }]

            res.status(200).send(onlineTeachers);
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader("Allow", "GET");
        res.status(405).end("Method Not Allowed");
    }
};
