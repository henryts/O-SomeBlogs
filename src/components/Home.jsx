import React from 'react';
import { useState } from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Button, Col} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'This is the first blog',
      status: 'Published',
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'This is the second blog',
      status: 'Draft',
    },
    {
      id: 3,
      title: 'Blog 3',
      description: 'This is the third blog',
      status: 'Published',
    },
  ];
  
  const Home = () => {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate("/edit"); // Replace '/edit' with the desired route path
      };
    
      const handleDeleteClick = () => {
        navigate("/delete"); // Replace '/delete' with the desired route path
      };
    const [selectedBlog, setSelectedBlog] = useState(null);
  
    const handleBlogClick = (blog) => {
      setSelectedBlog(blog);
    };
    const handleRemoveAll = ()=>{
        navigate("/deleteAll");
    }
  
    return (
      <div> 
        <div className='heading'>  <h1>Contents</h1></div>
      <div className="container">
      
        <div className="blog-list">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`blog-item ${selectedBlog === blog ? 'active' : ''}`}
              onClick={() => handleBlogClick(blog)}
            >
              {blog.title}
            </div>
          ))}
        </div>
        <div className="blog-details">
          {selectedBlog ? (
        
            <div className='outerring'>
              <h2 className="blog-details__title">{selectedBlog.title}</h2> 
              <p className="blog-details__description">{selectedBlog.description}</p>
              <p className="blog-details__status">{selectedBlog.status}</p>
               
              <Button variant="secondary" className='editButton' onClick={handleEditClick}>Edit</Button>   
              <Button variant="danger" className='deleteButton' onClick={handleDeleteClick}>Delete</Button>
              

            </div>

            
          ) : (
            <p className="blog-details__empty">Select a blog to view details</p>
          )}
        </div>
      
      </div>
      <Button variant="danger" className='dangerbutton' onClick={handleRemoveAll}>Remove All</Button>   
      </div> 
    );
  };
  
  export default Home;
