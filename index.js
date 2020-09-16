require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoute = require('./routes/product.js');

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect(
    process.env.MONGO_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

app.use('/products', productRoute);

app.get('/', (req, res) => {
    res.send('Home page');
})

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})


