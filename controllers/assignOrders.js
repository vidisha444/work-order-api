
function assignOrders(req, res) {
    let empid = req.body.empId
    let id = req.body.id
let query = 'update orders set empid = ?, status = ? where id = ? and status = "N" '
    connectDatabase(query,[empid,'P',id])
    .then((rows) => {
        console.log("Rows: ", rows)
            if (rows.affectedRows > 0) {
                res.status(200).send({ code: 200, message: 'Order Assigned' })
            } else {
                res.status(400).send({ code: 400, message: "Failed db action" })
            }
    }).catch((err) => {
        res.status(500).send({ code: 500, msg: "Can't connect to db" })
    })
}

module.exports.assignOrders = assignOrders