'use strict';

module.exports = function(app) {
    const todo = require('./controller');

    app.get('/', todo.index);

    app.post('/tes', todo.login);

    app.get('/home', todo.home);

    app.post('/transaksi', todo.transaksi);
};