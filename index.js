var express = require('express');
var app = express();
var port = 3000;


var mongoose= require('mongoose');
mongoose.connect('mongodb+srv://strongkim:zDmreaS9970oACbV@boilerplate.4ljh4.mongodb.net/boilerplate?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {res.send('hello world')} );

app.listen(port,()=>console.log(`Exapmle app listening on port ${port}!`));