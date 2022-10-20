import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('1');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    setIsPending(true);

    const blog ={title, body, author};
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then((res)=>{
      // console.log(res);
      setIsPending(false);
      if(res.ok){
        setTitle('');
        setBody('');
        setAuthor('1');
        navigate("/");
        setError(null);
      } else{
        throw Error('Error occured when adding this blog!! Error Status: '+res.status);
      }
    }).catch(err=>{
      // console.log(err.message);
      setError(err.message);
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      {error && <div>{error} <br /> Please try again. </div> }
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value = {body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="1">Saddam</option>
          <option value="2">Hossain</option>
          <option value="3">Raju</option>
        </select>
        { !isPending && <button>Add blog</button>}
        { isPending && <button disabled>Adding blog</button>}
      </form>
    </div>
  );
}

export default Create;