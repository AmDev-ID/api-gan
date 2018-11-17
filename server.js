const express = require('express');
const app = express();
const body = require('body-parser');
const port = process.env.PORT || 5000;
const route = require('./routes');
const controller = require('./controller');

app.use(body.urlencoded({extended: true}));
app.use(body.json());

route(app);

app.listen(port, () => console.log("Listening on port "+port));
