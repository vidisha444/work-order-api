


function login(req, res) {
    console.log('check')
    let userName = req.body.userName
    let password = req.body.password
    let query = 'select urs.id, urs.username from users urs LEFT JOIN roles rls ON urs.id = rls.userid where username = ? and password = ?'
    connectDatabase(query, [userName, password])
        .then((rows) => {
            console.log("Rows: ", rows)
            if (!_.isEmpty(rows)) {
                res.status(200).send({ code: 200, message: 'LogIn Successfully', data: rows[0] })
            } else {
                res.status(400).send({ code: 400, message: "Failed db action" })
            }
        }).catch((err) => {
            res.status(500).send({ code: 500, msg: "Can't connect to db" })
        })
}

module.exports.login = login