const express = require("express")
const router = express.Router()

router.route("/getAdmins").get((req, res)=> {
    res.send([{id:"1"},{id:"1"},{id:"1"}])
})

module.exports = router