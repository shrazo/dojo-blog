import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/dojo-blog/">Home</Link>
                <Link to="/dojo-blog/create">New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;