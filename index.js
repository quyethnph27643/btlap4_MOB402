var express = require('express');
var app = express();
app.listen(process.env.PORT || '8000');
var expressHbs =require('express-handlebars');

app.engine('.hbs', expressHbs.engine());
app.set('view engine','.hbs');

app.get('/', function(req,res){
    res.send('hello');
});

app.get('/handlebars', function(req, res){
    res.render('index');
})