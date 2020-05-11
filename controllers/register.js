


function register(req, res) {
    console.log('check')
    let userName = req.body.userName
    let password = req.body.password
    let query = 'insert into users (username, password) values (?,?)'
    connectDatabase(query, [userName, password])
        .then((rows) => {
            console.log("Rows: ", rows)
            if (rows.affectedRows > 0) {

                // Insert User Role into roles table
                let userId = rows.insertId
                let role = 'cust'
                let query = 'insert into roles (userid, role) values (?,?)'
                connectDatabase(query, [userId, role])
                    .then((rows) => {
                        console.log("Rows: ", rows)
                        if (rows.affectedRows > 0) {
                            res.status(200).send({ code: 200, message: 'Registered Successfully' })
                        } else {
                            res.status(400).send({ code: 400, message: "Failed db action" })
                        }
                    }).catch((err) => {
                        res.status(500).send({ code: 500, msg: "Can't connect to db" })
                    })


            } else {
                res.status(400).send({ code: 400, message: "Failed db action" })
            }
        }).catch((err) => {
            res.status(500).send({ code: 500, msg: "Can't connect to db" })
        })
}

module.exports.register = register