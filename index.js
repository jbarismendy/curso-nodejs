// Clase 11 - Backend - Node JS
// https://www.youtube.com/watch?v=bddb7sTtN4U

import express from 'express';
const app = express();

const products = [
    { id: 1, name: "Product 1", price: 10.0, quantity: 100 },
    { id: 2, name: "Product 2", price: 20.0, quantity: 200 },
    { id: 3, name: "Product 3", price: 30.0, quantity: 300 },
];

app.get("/", (req, res) => {
    res.send("API Rest en Node.js")
});

app.get("/products", (req, res) => {
    res.send(products);
})

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));