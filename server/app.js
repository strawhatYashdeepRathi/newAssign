const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const bodyParser = require("body-parser");
const {MONGOURI} = require('./keys');
const cors = require("cors");
require('./models/prod')

mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo')
})
mongoose.connection.on('error', (err)=>{
    console.log('Mongo error', err)
})


app.use(cors());


app.use(bodyParser());
app.use(express.json())
app.use(require('./routes/prodlist'))

app.listen(PORT, ()=>{
    console.log('Server is listening on', PORT)
})