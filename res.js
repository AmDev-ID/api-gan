'use strict';

exports.ok = (value, res) => {
    const data = {
        'status': 200,
        'values': value
    };
    res.json(data);
    res.end;
};

exports.error = (value, res) => {
    const data = {
        'status': 404,
        'values': value
    };
    res.json(data);
    res.end;
};