const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Usar as rotas com prefixo /api
app.use('', productRoutes);

module.exports = app;
