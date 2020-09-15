require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGO_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Ecommerce server!');
})

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})


