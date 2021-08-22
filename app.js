const express = require("express")
const person = require("./routes/Person")
const admin = require("./routes/Admin")

const app = express();

app.use("/person", person)
app.use("/admin", admin)









module.exports = app;