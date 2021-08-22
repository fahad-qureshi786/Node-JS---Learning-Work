const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const databaseConnection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-project1'
}

const connection = mysql.createConnection(databaseConnection);
const app = express();
app.use(bodyParser.json());

//get all users
app.get('/users', (req, res) => {
    // if (connection.connect){
    const query = "select * from users";
    connection.query("select * from users", (err, row) => {
        if (err)
            res.send(err);
        res.json(row);
    })
    // }
})

//get user by id
app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    connection.query(`select *
                      from users u
                      where u.id = ${id}`, (err, row) => {
        if (err)
            res.send(err);
        console.log(`in return ${row}`)
        res.json(row);
    })
})
//add user api

//get user by id
app.post('/addUser', (req, res) => {
    const {id, username, password} = req.body;
    connection.query(`insert into users values(${id}, '${username}', '${password}')`, (err, row) => {
        if (err)
            res.send(err);
        console.log(`in return ${row}`)
        res.json(row);
    })
})

//update user
app.put('/updateUser', (req, res) => {
    const {id, username, password} = req.body;
    if (id==null) {
        res.send({
            message: "Please mention id for update"
        })
        return;
    }
    connection.query(`UPDATE users SET username='${username}',password='${password}' WHERE id=${id}`, (err, row) => {
        if (err)
            res.send(err);
        console.log(`in return ${row}`)
        res.json(row);
    })
})
//delete API
app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    if (id==null) {
        res.send({
            message: "Please mention id for update"
        })
        return;
    }
    connection.query(`delete from users WHERE id=${id}`, (err, row) => {
        if (err)
            res.send(err);
        console.log(`in return ${row}`)
        res.json(row);
    })
})



app.listen(8088, () => {
    console.log("Server Running")
})