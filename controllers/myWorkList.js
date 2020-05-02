

function myWorkList(req, res) {
    let  empid = req.body.empid

    query = 'select id, title, description from orders where empid = ? and status = "P"'
    connectDatabase(query, [empid])
        .then((rows) => {
            if (!_.isEmpty(rows)) {
                res.status(200).send({ code: 200, message: 'Success', data: rows })
            } else {
                res.status(400).send({ code: 400, message: "Failed db action" })
            }
        }).catch((err) => {
            res.status(500).send({ code: 500, msg: "Can't connect to db" })
        })
}
module.exports.myWorkList = myWorkList