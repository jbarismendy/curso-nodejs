import express from 'express';
import cors from 'cors';
const app = express();

const products = [
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 20.0 },
    { id: 3, name: "Product 3", price: 30.0 },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Api REST en NodeJS");
});

app.get("/products", (req, res) => {
    res.json(products);
})

app.get("/products/search", (req, res) => {
    const { name } = req.query;
    const filteredProduct = product.filter((singleProduct) =>
        singleProduct.name.toLowerCase().includes(name.toLocaleLowerCase()));
    res.json(filteredProduct);
})

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = product.find((item) => item.id == id);

    if (!product ) {
        res.status(404).json({ error: "No existe el producto"});
    }
    res.json(product);
});

app.post("/products", (req, res) => {
    const { name, price } = req.body;

    const newProduct = {
        id: products.length +1,
        name,
        price
    };

    product.push(newProduct);
    res.status(201).json(newProduct)
});

app.put("/products", (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ error: "Producto no encontrado"});
    }

    const { name, price } = req.body;

    products[productIndex] = { id: productId, name, price };
    res.json(products[productIndex]);
});

app.delete("/products", (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ error: "Producto no encontrado"});
    }

    products.splice(productIndex, 1);
    res.status(204).send()
})

app.use((req, res, next) => {
    res.status(404).json({ error: "Not found"});
})

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));