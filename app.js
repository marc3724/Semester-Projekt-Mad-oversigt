const express = require('express');

// express variabel
const app = express();

//view Engine tjekker view-folder
app.set('view engine', 'ejs');

//listen
app.listen(3000);

//middleware mm
app.use(express.static('public'));


app.get('/', (req,res)=>{

res.render('index');
});

app.get('/opskrifter', (req,res)=>{
    res.render('opskrifter',);
    });



app.get('/kategorier', (req,res)=>{

    res.render('kategorier',{kategorier});

    });

const kategorier = [
    {gruppe: 'køl', vare: 'laks'},
    {gruppe: 'køl', vare: 'youghurt'},
    {gruppe: 'skab', vare: 'kartofelpulver'},
    ];

app.use((req,res)=>{
    res.render('index');
})