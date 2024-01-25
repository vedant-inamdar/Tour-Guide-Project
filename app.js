const express = require('express') ;
const path = require('path') ;
const mongodb = require("mongodb");
const db = require("./data/database");

const app= express() ;

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use('/images' ,express.static('images'));

var engine = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views')) ;

app.get('/',function(req,res){
    res.sendFile('C:/Users/vsina/Downloads/Tour-Project-main/index.html') ;
})

app.get('/Main.html', function(req,res){
    res.sendFile('C:/Users/vsina/Downloads/Tour-Project-main/index.html') ;
})

app.get('/manali', function (req, res) {
    res.render('manali.ejs');
});

app.get('/goa', function (req, res) {
    res.render('goa.ejs');
});

app.get('/delhi', function (req, res) {
    res.render('delhi.ejs');
});

app.get('/jaipur', function (req, res) {
    res.render('jaipur.ejs');
});

app.get('/kerala', function (req, res) {
    res.render('kerala.ejs');
});

app.get('/darjeeling', function (req, res) {
    res.render('darjeeling.ejs');
});

app.get('/policy', function (req, res) {
    res.sendFile('C:/Users/vsina/Downloads/Tour-Project-main/pages/policy.html');
});

app.post('/saveData.html', async function(req,res){
    
    const user = {
          name:req.body.name,
          email:req.body.email,
          phone:req.body.phone,
          subject:req.body.subject,
          message:req.body.message
    } ;

    const users = await db.getdb().collection('users').insertOne(user) ;
    res.sendFile('C:/Users/vsina/Downloads/Tour-Project-main/pages/savedData.html') ;
}) ;

db.connectToDataBase().then(function(){
    app.listen(3000);
  });