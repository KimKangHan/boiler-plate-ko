var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

var config =  require('./config/key');
var {User} = require('./models/User');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());



var mongoose= require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('MongoDB Connected...'))
    .catch(err => {console.log('config', config.mongoURI) ;console.log(err);});



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {res.send('hello world')} );

app.post('/register',(req,res) =>{
    //회원 가입 시 필요한 정보들을 client에서 가져오면
    //그것들을 DB에 넣어준다.
    var user= new User(req.body);

    user.save((err,userInfo)=>{
        if(err) return res.json({success:false, err}) 
        return res.status(200).json({
            success:true
        })
    });
})

app.listen(port,()=>console.log(`Exapmle app listening on port ${port}!`));