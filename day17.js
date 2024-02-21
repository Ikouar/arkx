const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON body
app.use(express.json());

// Dummy array of products
let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

// Define routes

// GET all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(prod => prod.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
});

// GET products based on search criteria
app.get('/products/search', (req, res) => {
    const { q, minPrice, maxPrice } = req.query;
    let filteredProducts = [...products];

    if (q) {
        filteredProducts = filteredProducts.filter(prod =>
            prod.name.toLowerCase().includes(q.toLowerCase())
        );
    }

    if (minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(prod => prod.price >= parseFloat(minPrice));
    }

    if (maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(prod => prod.price <= parseFloat(maxPrice));
    }

    res.json(filteredProducts);
});

// POST a new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    const id = products.length + 1;
    const newProduct = { id, name, price: parseFloat(price) };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT (update) a product by ID
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;

    let product = products.find(prod => prod.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    product.name = name || product.name;
    product.price = price ? parseFloat(price) : product.price;
    res.json(product);
});

// DELETE a product by ID
app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const index = products.findIndex(prod => prod.id === productId);
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    products.splice(index, 1);
    res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
