import React from 'react';
import './blog_section.css'; 


const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Unlocking the Potential of Machine Learning',
      author: 'John Doe',
      date: 'April 5, 2023',
      excerpt: 'Explore the fascinating world of machine learning and its applications in real-world scenarios.',
      link: 'https://example.com/machine_learning_blog',
    },
    {
      title: 'Building Responsive Web Design with CSS Grid',
      author: 'Jane Smith',
      date: 'March 22, 2023',
      excerpt: 'Learn how to create responsive and flexible layouts using CSS Grid for modern web design.',
      link: 'https://example.com/css_grid_blog',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog_section">
      <div className="container">
        <h2 className="section_title">Latest Blog Posts</h2>
        <div className="blog_posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog_post">
              <h3 className="post_title">{post.title}</h3>
              <p className="post_metadata">
                <span className="post_author">{post.author}</span> | <span className="post_date">{post.date}</span>
              </p>
              <p className="post_excerpt">{post.excerpt}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="post_link">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
