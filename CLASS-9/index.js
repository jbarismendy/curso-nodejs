import express from "express";

const app = express();

// Ejercicio de la clase 9
app.get("/ping", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send("/pong");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));