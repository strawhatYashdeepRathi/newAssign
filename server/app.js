const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('./modal/productSchema')

const Connection = require('./db/dbconnection');
const Products = require('./routes/products')
const PORT = 5000;

Connection();
app.use(cors());
app.use('/', Products);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));