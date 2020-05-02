
function finishOrder(req, res) {
    let orderId = req.body.orderid

    let query = 'update orders set status = "F" where id = ?'
    connectDatabase(query, [orderId])
        .then((rows) => {
            if (!_.isEmpty(rows)) {
                res.status(200).send({ code: 200, message: 'Order Completed' })
            } else {
                res.status(400).send({ code: 400, message: "Failed db action" })
            }
        }).catch((err) => {
            res.status(500).send({ code: 500, msg: "Can't connect to db" })
        })
}

module.exports.finishOrder = finishOrder