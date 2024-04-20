import { db } from "../db.js"

export const getLikes = (req, res) => {
    const q = "select l.id, `username`, l.uid_likes from likes l join users u on l.uid_likes=u.id where l.pid_likes = ?";
    db.query(q, req.params.id, (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const addLike = (req, res) => {
    const q = "insert into likes (`uid_likes`, `pid_likes`) values (?)";
    const values = [
        req.body.uid,
        req.body.pid
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json("Like Added");
    })
}