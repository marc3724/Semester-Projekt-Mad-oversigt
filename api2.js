// Gratis test api med array

let dataAPIen ;

function fakeURL(){
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
 dataAPIen=data1;
}) 
.catch((err)=>{
 console.log(err);
})
}


