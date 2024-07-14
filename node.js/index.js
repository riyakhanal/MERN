const express = require('express')
const { default: mongoose, mongo } = require('mongoose')
const connectDb = require('./config/db');
const taskcontroller = require("./controllers/task.controller");
const app = express()
const port = 3000

//connection with mongodb 
connectDb();

//creating schema of table


//using urlencoded
app.use(express.urlencoded());
const todos = ["learn html", "learn css", "learn php"];
// app.get("/:index", (req, res) => {
//   const index = req.params.index;
//   res.send(todos[index]);
// });

app.set("view engine", "ejs");



app.get('/', taskcontroller.getTask);


app.post("/add", taskcontroller.createTask);

app.post("/delete/:id", taskcontroller.deleteTask);

app.get("/edit/:id", taskcontroller.editTask);

app.post("/edit/:id", taskcontroller.updateTask);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});