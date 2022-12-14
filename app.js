const express = require('express');
const mongoose = require('mongoose');
// express variabel
const app = express();

let username = 'zealand';
let password = '85po';
const uri = `mongodb+srv://${username}:${password}@nodetuts.8rpemlk.mongodb.net/?retryWrites=true&w=majority`;

async function connecting(){
    try {
        await mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
        .then((result)=>console.log('connected to MongoDB'))
    } catch (error) {
        console.log((error) => console.log(error));
    }
}

connecting();



//view Engine tjekker view-folder
app.set('view engine', 'ejs');

//listen
app.listen(3000, ()=>console.log('Server startet on port 3000'));

//middleware mm
app.use(express.static('public'));

//Router

app.get('/', (req,res)=>{
res.render('index2');
});

app.get('/opskrifter', (req,res)=>{
    res.render('opskrifter',);
    });

app.get('/kategorier', (req,res)=>{
    res.render('kategorier',{kategorier});
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

