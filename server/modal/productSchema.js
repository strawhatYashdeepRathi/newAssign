const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    url: String,
    title: String,
    type: String,
    Price: String,
});
mongoose.model('Product', productSchema);