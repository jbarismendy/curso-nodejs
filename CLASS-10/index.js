// Clase 10 - Backend - Node JS
// https://www.youtube.com/watch?v=g3EZnY0_MQI

import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi servidor</h1>");
});

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
];

app.get("/products", (req, res) => {
    res.json(products);
})

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));