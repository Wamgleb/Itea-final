const express = require("express");
const dotenv = require ("dotenv");
const mongoose = require("mongoose");
//models
const TodoTask = require("./models/TodoTask");
const app = express();

dotenv.config();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
console.log("Connected to db!");
app.listen(3001, () => console.log("Server Up and running"));
});

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
    });

app.post('/',(req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
        });
    try {
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
        }
    });
    //console.log(req.body);

app.listen(3000);

