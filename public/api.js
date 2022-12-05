// Gratis test api med array

document.getElementById("kategori").innerHTML="ændring" 


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
 document.getElementById("kategori").innerHTML=data1;
}) 
.catch((err)=>{
 console.log(err);
})

