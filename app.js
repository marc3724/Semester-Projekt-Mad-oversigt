const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const Category = require('./models/category');
//Product model
const Category = mongoose.model('Category', {
  food: {
    type: String,
    required: true,
  },
  kategori: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  expire: {
    type: Date,
    required: true,
  }
});

// express variabel
const app = express();

let username = 'zealand';
let password = '85po';
//const uri = `mongodb+srv://${username}:${password}@nodetuts.8rpemlk.mongodb.net/?retryWrites=true&w=majority`;
const dbURI="mongodb+srv://Kristian:12345@foodcheck.19jdzhl.mongodb.net/foodcheck-users?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


//view Engine tjekker view-folder
app.set('view engine', 'ejs');

//listen
//app.listen(3000, ()=>console.log('Server startet on port 3000'));

//middleware mm
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

//Router

app.get('/', (req,res)=>{
res.render('Index2');
});

app.get('/opskrifter', (req,res)=>{
    res.render('opskrifter',);
    });

app.get('/kategorier', (req,res)=>{
    res.render('kategorier',{kategorier});
    });

app.get('/create', (req,res)=>{
    res.render('create',);
    });

app.get('/dyn', (req,res)=>{
    res.render('dyn',);
    });


    app.get('/blogs', (req, res) => {
        Category.find().sort({ createdAt: -1 })
          .then(json => res.send(json))
          .catch(err => console.error('error:' + err));
        });
          
      
      app.post('/blogs', (req, res) => {
        const blog = new Category(req.body);
      
        blog.save()
          .then(result => {
            res.redirect('/blogs');
          })
          .catch(err => {
            console.log(err);
          });
      });
      
      app.get('/blogs/:id', (req, res) => {
        const id = req.params.id;
        Blog.findById(id)
           .then(json => res.send(json))
          .catch(err => console.error('error:' + err));
      });
      
//her testes

// User model
// const User = mongoose.model('Categories', {
//   name: { type: String },
//   age: { type: Number }
// });

      app.get('/slet/:id', (req, res) => {
        console.log('slet aktiveret -------------------');



        const id = req.params.id;

        Category.findByIdAndDelete(id, function (err, docs) {
          if (err){
              console.log(err)
          }
          else{
              console.log("Deleted : ", docs);
          }
      });
        
      }); 

 

app.use((req,res)=>{
    res.render('index2');
});


const kategorier = [
    {gruppe: 'køl', vare: 'laks'},
    {gruppe: 'køl', vare: 'youghurt'},
    {gruppe: 'skab', vare: 'kartofelpulver'},
    ]; 



//mongoDB
//key gMCkx9JEu026gPBSXcx0l59M4HdswlWYmLZYjkNbEVRxxYY7UVXSYfvcA1g1q6Q3
//endpoint https://data.mongodb-api.com/app/data-warpm/endpoint/data/v1

function createBlogFunktion(){
    console.log("yeps, code virker");
          const form=document.getElementById('form');
          const preblog=new FormData(form);
          const blog=new URLSearchParams(preblog);
          console.log([...blog]);
          
          fetch('http://localhost:3000/blogs',{
            method: 'POST',
            body: blog,
          })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));
       }

       