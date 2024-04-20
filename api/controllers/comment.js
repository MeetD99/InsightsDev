import { db } from "../db.js"

export const getComments = (req, res) => {
    const q = "select `username`, c.id, c.desc from comments c join users u on c.uid = u.id where c.pid = ?";
    db.query(q, req.params.id, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
    
}

export const addComment = (req, res) => {
    const q = "insert into comments (`desc`, `uid`, `pid`) values (?)";
    const values = [
        req.body.desc,
        req.body.uid,
        req.body.pid
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json("Comment Created");
    })
}