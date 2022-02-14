const mongoose = require("mongoose");

const Connection = async () => {
    const URL = 'mongodb+srv://admin:admin@cluster0.oedc0.mongodb.net/myntraApp?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

module.exports = Connection;