const express = require('express');
const app = express();

const fs = require('fs');

const port = 3000;
app.listen(port, () => {
    console.log(`listning on port ${port}...`);
})

app.get("/", (req, res) => {
    res.send('<h1>Welcome, Welcome, Welcome!!</h1>');
});

const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'));
app.get("/api/v1/tours", (req, res) => {
    res.status(200).json(tours);
});