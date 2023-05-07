const express = require("express");
const { parseSing, parseSingUpdate, parseId } = require("./services/parseSing");
const { newId } = require("./services/newId");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
var SING = [];

const PORT = 3001;
app.listen(PORT);

app.get("/", (req, res) => {
  res.status(200).send(SING);
});
app.post("/", (req, res) => {
  try {
    const newSing = parseSing(req.body);
    const id = newId(SING);

    SING.push({ id, ...newSing });
    res.status(200).send("Sing created");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/", (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    SING = SING.filter((s) => id !== s.id);
    const singUpdate = parseSingUpdate(req.body);
    SING.push(singUpdate);
    res.status(200).send("Sing Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    SING = SING.filter((s) => s.id !== id);
    res.status(200).send("deleted");
  } catch (error) {
    send.status(400).send(error.message);
  }
});
console.log(`server running ${PORT}`);
