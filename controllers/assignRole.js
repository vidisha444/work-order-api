
function assignRole(req, res) {
    console.log('check')
    let userId = req.body.userId
    let role = req.body.role
    let query = 'insert into roles (userid, role) values (?,?)'
    connectDatabase(query,[userId,role])
    .then((rows) => {
        console.log("Rows: ", rows)
            if (rows.affectedRows > 0) {
                res.status(200).send({ code: 200, message: 'Role assigned successfully' })
            } else {
                res.status(400).send({ code: 400, message: "Failed db action" })
            }
    }).catch((err) => {
        res.status(500).send({ code: 500, msg: "Can't connect to db" })
    })
}

module.exports.assignRole = assignRole