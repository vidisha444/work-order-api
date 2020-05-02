
function getAllEmployee(req, res) {

    let query = 'select usr.id, usr.username from users usr INNER JOIN roles ON roles.userid = usr.id where roles.role = "emp"'
    connectDatabase(query)
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

module.exports.getAllEmployee = getAllEmployee