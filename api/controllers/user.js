import { db } from "../db.js"

export const getUserPosts = (req, res) => {
    const q = "select * from posts where uid = ?";
    db.query(q, req.params.uid, (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}

export const updatePhoto = (req, res) => {
    const q = "update users set img = ? where id = ?";
    const values = [req.body.img, req.body.uid];
    db.query(q, values, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json("Updated Photo");
    })
}