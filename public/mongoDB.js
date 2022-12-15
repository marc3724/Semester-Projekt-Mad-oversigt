// Gratis test api med array

//document.getElementById("opskrift").innerHTML="ændring" 

/*
let password = '85po'
let username = 'zealand'

let mongoURL = `mongodb+srv://'${username}':'${password}'@nodetuts.8rpemlk.mongodb.net/?retryWrites=true&w=majority`;
*/
let fakeURL = 'http://fakestoreapi.com/products';

 //map funktion som virker på fakeApi
 fetch(fakeURL)
 .then((data)=>{
 return data.json();
})
.then((complete)=>{
 console.log(complete);
 let data1 = "";
 complete.map((values)=>{
   data1 += `<p>${values.title}</p>`
 });
 document.getElementById("opskrift").innerHTML=data1;
}) 
.catch((err)=>{
 console.log(err);
})

