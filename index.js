const express = require("express");
const path = require("path");

const app = express();
const PORT = 1729;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/index.html"));
});

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/index.html"));
});

app.get("/tables.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/tables.html"));
});

app.get("/reservation.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/reservation.html"));
});

app.get("/api/tables", (req, res) => {
    res.json(tables);
});

app.post("/api/tables", (req, res) => {
    let newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
});

app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
});