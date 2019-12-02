module.exports = {
    getUser: (req, res) => {
        //get db instance
        const db = req.app.get('db');
        //invoke SQL query
        db.get_name().then(user => {
            //send user to client-side
            res.status(200).send(user);
        })
    }
}