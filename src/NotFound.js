import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Not found</h2>
      <h5>The page you are looking for doesn't exist.</h5>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}
 
export default NotFound;
