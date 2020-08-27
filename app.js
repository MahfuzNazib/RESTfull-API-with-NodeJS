const express = require('express');
const app = express();
const morgan = require('morgan');//use for looking url in cmd
const bodyParser = require('body-parser');

const productsRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CROS Error Handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Conreol-Allow-Headers",
        "*"
    );

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','*');
        return res.status(200).json({});
    }

    //Check over Others Route
    next();
})



//Pass All Route
app.use('/products', productsRoute);
app.use('/order', orderRoute);


// Error Handing
app.use((reqmres,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    })
})

module.exports = app;