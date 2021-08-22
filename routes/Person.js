const express = require("express")
const router = express.Router()

router.route("/all").get((req, res)=> {
    console.log("asjjasdh");
    res.send("Hello All")
})

module.exports = router