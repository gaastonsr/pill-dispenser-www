var express = require('express');
var request = require('request');

var router = express.Router({
    caseSensitive: false,
    strict       : true
});

router.get('/activar-cuenta/:token', function(req, res, next) {
    request
    .put('http://api.pilly.meridafest.com/users/activate/' + req.params.token)
    .on('response', function(response) {
        if (response.statusCode === 200) {
            res.status(200).send('Cuenta activada.');
        } else {
            res.status(400).send('Error activando cuenta.');
        }
    })
    .on('error', function(error) {
        res.status(400).send('Error activando cuenta.');
    });
});

module.exports = router;
