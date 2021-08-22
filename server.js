const app = require("./app")
const env = require("dotenv")
const connection = require("./config/Database")

env.config({path: "config/config.env"})

connection;

const server = app.listen(process.env.PORT || 4000, ()=> {
    console.log("Server is running on port: "+process.env.PORT)
})



process.on("unhandledRejection", (err)=> {
    console.log("Database Server is not running")
    server.close(()=> {
        process.exit();
    })
})