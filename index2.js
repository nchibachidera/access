import express from "express";
import superheroes from "superheroes";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  let name = superheroes.random();
  res.send(`<h1>${name} is the only problem I have</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});