const express = require("express")
const {getAllAdmin} = require("../service/AdminService");
const router = express.Router()

router.route("/getAdmins").get(
    getAllAdmin
)

module.exports = router