const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const Category = require('./models/category');

// express app
const app = express();

// connect to mongodb & listen for requests
//const dbURI = "mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts";
const dbURI="mongodb+srv://Kristian:12345@foodcheck.19jdzhl.mongodb.net/players?retryWrites=true&w=majority";
//const dbURI="mongodb+srv://Pernille:Test123@cluster0.iwhtj40.mongodb.net/Blogs?retryWrites=true&w=majority";
//const dbURI="mongodb+srv://Kristian:12345@foodcheck.19jdzhl.mongodb.net/foodcheck-users"; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
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

// routes

app.get('/category', (req, res) => {
  Category.find().sort({ createdAt: -1 })
    .then(json => res.send(json))
    .catch(err => console.error('error:' + err));
  });
    

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);

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

app.get('/slet/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req,res)=>{
  res.render('dyn');
  });
