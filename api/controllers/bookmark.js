import { db } from "../db.js"

export const getBookmarks = (req, res) => {
    const q = "select id, title from posts where id in (select pid_bookmarks from bookmarks b where uid_bookmarks = ?)";

    db.query(q, req.params.id, (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const addBookmark = (req, res) => {
    const q = "insert into bookmarks (`uid_bookmarks`, `pid_bookmarks`) values (?)";
    const values = [
        req.body.uid,
        req.body.pid
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json("Bookmark Added");
    })
}