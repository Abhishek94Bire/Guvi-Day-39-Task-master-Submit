const express = require("express");
const fs = require("fs");

const app = express();

//middlewares
app.use(express.json());

app.get("/", function (req, res) {
  res.send(
    "Hello! Day-39-Task.Please check http://localhost:3000/timestamp to view the current timestamp details"
  );
});

app.get("/timestamp", (req, res) => {
  let time = new Date();
  let dateString = time;
  const content = `Last created timestamp ${dateString}`;

  fs.writeFileSync("date-time.txt", content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created sucessfully");
    }
  });

  res.json(content);
});

app.listen(3000, () => console.log("server started in localhost:3000"));
