

function placeOrders( req, res) {

    let title = req.body.title
    let desc = req.body.description
    let userId = req.body.userId

let query = 'insert into orders (title, description, userid, status) values (?,?,?,?)'
    connectDatabase(query,[title,desc, userId, 'N'])
    .then((rows) => {
        console.log("Rows: ", rows)
            if (rows.affectedRows > 0) {
                res.status(200).send({ code: 200, message: 'Order Placed Successfully' })
            } else {
                res.status(400).send({ code: 400, message: "Failed db action" })
            }
    }).catch((err) => {
        res.status(500).send({ code: 500, msg: "Can't connect to db" })
    })
}
module.exports.placeOrders = placeOrders