import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Create from './Create';
import NotFound from './NotFound';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/dojo-blog/" element={<Home />} />
            <Route path="/dojo-blog/create" element={<Create />} />
            <Route path="/dojo-blog/blogs/:id" element={<BlogDetails />} />
            <Route path="dojo-blog/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
