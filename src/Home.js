import React from 'react';
import BlogList from "./BlogList";
import loadingGif from "./loading.gif";
import useFetch from "./useFetch";

const Home = () => {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  const { data: blogs, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <div className="home">
      {error && <div>Error !!! <br />{error}</div>}
      {isPending && <img src={loadingGif} alt="Loading blog lists..." />}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
}

export default Home;

