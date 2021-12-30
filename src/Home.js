import { useState, useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {
   const [blogs, setBlogs] = useState(null);

    // [nconstame, setName] = useState('dami');
   const handleDelete = (id) => {
const newBlogs = blogs.filter(blog =>blog.id !==id);
  setBlogs (newBlogs);
   }
    useEffect(()=>{
        fetch (" http://localhost:8000/blogs")
        .then(res =>{
         return res.json();
        })
        .then( data =>{
    //  console.log(data)
     setBlogs(data);
        })
// console.log('use effect run');
// console.log (name)
    },[] );

    return (
       <div className ="home">
        <BlogList blogs ={blogs} title ='All Blogs' handleDelete={handleDelete}/>  
        <BlogList blogs ={blogs.filter ((blog) => blog.author==='gab')} title ='gabs blog'/> 
        {/* <button onClick={() =>setName('enny') }> change name</button> */}
        {/* <p>{name}</p> */}
       </div>  
      );
}
 
export default Home;