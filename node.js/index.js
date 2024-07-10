const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded());
const todos = ["learn html", "learn css", "learn php"];

app.get("/", (req, res) => {
  let taskList = "";
  todos.forEach((todo, index) => {
    taskList += `
    <li>
      ${todo} 
      <form method="post" action="/delete/${index}">
      <button type="submit">delete</button>
      </form>
      <a href="/edit/${index}">edit</a>
    </li>`;
  });
  res.send(`
    <form method="post" action="/add">
      <input type="text" name="task" id="task" placeholder="Your new task." />
      <input type="submit" value="Add" id="submit" />
    </form>
    <p>your tasks</p>
    <ul>
     ${taskList}
    </ul>
    `);
});

app.get("/:index", (req, res) => {
  const index = req.params.index;
  res.send(todos[index]);
});

app.post("/add", (req, res) => {
  todos.push(req.body.task);
  res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
  const index = req.params.index;
  todos.splice(index, 1);
  res.redirect("/");
});

app.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  res.send(`
      <form method="post" action="/edit/${index}">
      <input type="text" name="task" id="task" value="${todos[index]}" />
      <input type="submit" value="Update" id="submit" />
    </form>
    `);
});

app.post("/edit/:index", (req, res) => {
  todos[req.params.index] = req.body.task;
  res.redirect("/");
  // update todos array
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});