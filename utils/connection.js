var pool = mysql.createPool({
    connectionLimit: 200,
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.sql_db,
    port: 3306,
    timezone: 'UTC+0',
    multipleStatements: true
  })
  
  function connectDatabase (query, value) {
    let deferred = q.defer()
    pool.getConnection(function (err, connection) {
      if (err) {
        return deferred.reject({ message: "Can't connect to database." })
      } else {
        // Use the connection
        connection.query(query, value, function (error, results) {
          // When done with the connection, release it.
          // Handle error after the release.
          if (error) {
            console.log('error', error)
            connection.destroy()
            return deferred.reject({ message: 'Failure' + error })
          } else {
            // console.log('resul', results)
            let dbRes = JSON.parse(JSON.stringify(results))
            connection.destroy()
            deferred.resolve(dbRes)
          }
        })
      }
    })
    return deferred.promise
  }
  module.exports.connectDatabase = connectDatabase