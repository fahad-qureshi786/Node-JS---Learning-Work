const connection = require("../config/Database")

module.exports.getAllAdmin = (req, res)=> {
    connection.query("select * from users", (err, row, fields)=> {
        if (err)
            res.send(err)
        else
            res.send(row)
    })

}