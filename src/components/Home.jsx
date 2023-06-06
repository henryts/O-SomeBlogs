import React from 'react';
import { useState } from 'react';
import './Home.css'

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
    const [selectedBlog, setSelectedBlog] = useState(null);
  
    const handleBlogClick = (blog) => {
      setSelectedBlog(blog);
    };
  
    return (
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
            <div>
              <h2 className="blog-details__title">{selectedBlog.title}</h2>
              <p className="blog-details__description">{selectedBlog.description}</p>
              <p className="blog-details__status">{selectedBlog.status}</p>
            </div>
          ) : (
            <p className="blog-details__empty">Select a blog to view details</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Home;
