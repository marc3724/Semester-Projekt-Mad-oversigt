
      function udskrivAlle(){
         const blogs = [
          {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
          {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
          {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
         ];
          let html=`<table>`;
          blogs.forEach(blog => { 
             html+="<tr><td>";
             html+=blog.title;
             html+="</td>";
             html+="<td>";
             html+=blog.snippet;
             html+="</td></tr>";
             console.log(blog.title);
             console.log(blog.snippet);
          });
          html+="</table>";
          //var x = document.getElementById("tekstfelt");
          document.querySelector("p").innerHTML = html;
          //document.getElementById("tekstfelt2").innerHTML="Hej";
        }
  
        function get(){
           const nr=document.getElementById("id").value;
           fetch('http://localhost:3000/blogs/'+nr)
           .then(res => res.json())
           .then(json => {
              console.log(json);
              document.querySelector('.formklasse').innerHTML=json.title;
           })
        }
  
  
        function getDelete(){
           const nr=document.getElementById("delid").value;
            fetch('http://localhost:3000/slet/'+nr)
           .then(res => console.log('Blog slettet'))
           .catch(err => console.log(err," Kunne ikke slette blog"));
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
           let html=`<table>`;
           data.forEach(blog => { 
           html+=`<tr><td>`;
           html+=blog.title;
           html+="</td>";
           html+="<td>";
           html+=blog.author;
           html+="</td></tr>";
        });
        html+="</table>";
        //var x = document.getElementById("tekstfelt");
        document.querySelector("p").innerHTML = html;
        //document.getElementById("tekstfelt2").innerHTML="Hej";
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
        }