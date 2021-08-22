const app = require("./app")
const env = require("dotenv")

env.config({path: "config/config.env"})
const server = app.listen(process.env.PORT || 4000, ()=> {
    console.log("Server is running on port: "+process.env.PORT)
})