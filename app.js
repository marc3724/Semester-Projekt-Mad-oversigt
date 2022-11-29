const express = require('express');


// express variabel
const app = express();

//view Engine tjekker view-folder
app.set('view engine', 'ejs');



//listen
app.listen(3000);

//middleware mm
app.use(express.static('/Billeder'));

app.get('/', (req,res)=>{
res.render('index');
});

app.get('/opskrifter', (req,res)=>{
    res.render('opskrifter');
    });

app.use((req,res)=>{
    res.render('index');
})