const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json()) //middleman to be able to req.body

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

app.post("/api/v1/tours", (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), err => {
        res.status(201).json(newTour);
    })
})
