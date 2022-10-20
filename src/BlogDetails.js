import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const {id} = useParams();
  const { data: blog, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts/'+id);
  const navigate = useNavigate();

  const handleClick = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+blog.id, {
      method: "DELETE"
    })
      .then((res)=>{
        if(res.ok){
          console.log('Item deleted');
          navigate("/");
        } else{
          throw Error('Error deleting the item. Error status: '+res.status);
        }
      })
      .catch(err=>{
        console.log(err.message);
      })
  }

  return (
    <div className="blog-detail">
      {isPending && <div> Loading... </div>}
      {error && <div> Error !!! {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.userId} </p>
          <div className="blog-body">
            {blog.body}
          </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;