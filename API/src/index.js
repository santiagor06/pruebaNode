const express = require("express");
const { parseSing, parseSingUpdate, parseId } = require("./services/parseSing");
const { newId } = require("./services/newId");
const app = express();
app.use(express.json());
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
    const id = parseId(req.body.id);
    SING = SING.filter((s) => id !== s.id);
    const singUpdate = parseSingUpdate(req.body);
    SING.push(singUpdate);
    res.status(200).send("Sing Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/", (req, res) => {
  try {
    const id = parseId(req.body.id);
    SING = SING.filter((s) => s.id !== id);
    res.status(200).send(`Sing ${id} deleted`);
  } catch (error) {
    send.status(400).send(error.message);
  }
});
console.log(`server running ${PORT}`);
