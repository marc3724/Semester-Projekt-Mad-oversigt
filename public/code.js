
  
        function get(){
           const nr=document.getElementById("id").value;
           fetch('http://localhost:3000/blogs/'+nr)
           .then(res => res.json())
           .then(json => {
              console.log(json);
              document.querySelector('.formklasse').innerHTML=json.title;
           })
        }
  
  
        function getDelete(nr3){
         console.log('getDelkete kører ---------');
         console.log(nr3 );
         //   const nr=document.getElementById("delid").value;

         //   const nr2=document.getSelection._id.value;
         
            fetch('http://localhost:3000/slet/'+nr3)
           .then(res => console.log('Blog slettet'))
           .catch(err => console.log(err," Kunne ikke slette blog"));
           udskrivAlle1();

        }
  
  
        async function getBlogs() {
           try {
               let res = await fetch('http://localhost:3000/blogs');
               return await res.json();
           } catch (error) {
               console.log(error);
           }
        }
  
       async function udskrivAlle1(){
           let data = await getBlogs();
           console.log(data);


           let id = "0";
           let html=`<table id="kategoriTable">`;
           data.forEach(blog => { 
            
         //dato tjek
         const date = new Date();
         console.log("i dag "+date);
         var d=new Date(blog.expire); 
         console.log("mad dag "+ d);

         if (d < date ){
            html+=`<tr class="alert"><td>`;
           }else{
            html+=`<tr><td>`;
           }
           html+=blog.food;
           html+="</td>";
           html+="<td>";
           html+=blog.kategori;
           html+="</td>";
           html+="<td>";
           html+=blog.location;
           html+="</td>";
           html+="<td>";
           html+=d.getDate()+"/"+(d.getMonth()+1);
           html+="</td>";
           html+="<td>";
           html+="<button type='button' onclick=getDelete('"+blog._id+"');>Slet</button>";
           html+="</td></tr>";
        });
        html+="</table>";
        
        document.getElementById("tekstfelt").innerHTML = html;

        //oldFoodAllert();

    }

    async function overskredet(){
      let data = await getBlogs();
      console.log(data);

      let id = "0";
      let html=`<table id="kategoriTable">`;
      data.forEach(blog => { 
       
    // her testes
    const date = new Date();
    console.log("i dag "+date);
    var d=new Date(blog.expire); 
    console.log("mad dag "+ d);

    if (d.getDate() < (date.getDate()+3) ){
      html+=`<tr class="alert"><td>`;
      html+=blog.food;
      html+="</td>";
      html+="<td>";
      html+=blog.kategori;
      html+="</td>";
      html+="<td>";
      html+=blog.location;
      html+="</td>";
      html+="<td>";
      html+=d.getDate()+"/"+(d.getMonth()+1);
      html+="</td>";
      html+="<td>";
      html+="<button type='button' onclick=getDelete('"+blog._id+"');>Slet</button>";
      html+="</td></tr>";
   }
   });
   html+="</table>";
   
   document.getElementById("oldFood").innerHTML = html;

}

async function oldFoodAllert(){
   let data = await getBlogs();
   let oldFood = `Udløber snart: \n`;
   let anyOldFood = false;

   data.forEach(blog => {     
 //dato tjek
 const date = new Date();
 console.log("i dag "+date);
 var d=new Date(blog.expire); 
 console.log("mad dag "+ d);

 if (d < date ){
    oldFood+=blog.food+"\n";
    anyOldFood=true;
    
   }
});
   if (anyOldFood=true){alert(oldFood);}
}
  
  
         function createBlogFunktion(){
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
           udskrivAlle1();
        }