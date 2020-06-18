const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8090;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes = [];

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/assets")));
app.use(express.static(path.join(__dirname, "/public/assets/css")));
app.use(express.static(path.join(__dirname, "/public/assets/js")));

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

let lastId = 2;

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  lastId += 1;
  newNote["id"] = lastId;

  console.log(newNote);
  notes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes), "utf8", function (err) {
    if (err) throw err;
  });

  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.delete("/api/notes/:id", (req, res) => {
    const requestId = Number(req.params.id);

    notes = notes.filter((note) => {
      return note.id !== requestId;
    });

    fs.writeFileSync("./db/db.json", JSON.stringify(notes), "utf8", function (err) {
      if (err) throw err;
    });

    res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});