import express from "express";
import superheroes from "superheroes";

const app = express();

app.get("/", (req, res) => {
    let name = superheroes.random();
    res.send('<h1>Behold, I am ${name}!</h1>');
});

app.listen(3000, () => {
    console.log('server runing on port 3000.');
});