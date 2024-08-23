import React, { useState, useEffect } from 'react';
import blogsData from '../../assets/descriptions/blogs.json';

import './BlogsPage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const BlogPost = ({ title, thumbnail, description }) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        import(`../../assets/images/blogs/${thumbnail}`).then(image => {
            setImage(image.default);
        });
    }, [thumbnail]);

    return (
        <div className="blog-post">
            <img src={image} alt={title} className="blog-thumbnail" />
            <div className="blog-content">
                <h3 className="blog-title">{title}</h3>
                <p className="blog-description">{description}</p>
            </div>
        </div>
    );
};

const BlogsPage = () => {

    return (
        <>
            <section className="blog-section">
                <h2 className="section-title">Some of My Writings</h2>
                <p className="section-description">
                These blogs reflect my genuine experiences and insights from my education and career in the Tech industry. 
                It serves as a testament to the knowledge and expertise I've accumulated over the years. While I strive for accuracy, 
                I'm human and may occasionally make mistakes. If you notice any inaccuracies, I welcome your feedback. I hope you find the content insightful.
                </p>
                <div className="blog-grid">
                    {blogsData.map((post, index) => (
                        <BlogPost
                            key={index}
                            title={post.title}
                            thumbnail={post.thumbnail}
                            description={post.description}
                        />
                    ))}
                </div>
                <div className="view-all">
                    <a href="#">View all posts</a>
                </div>
            </section>
            <SectionDivider />
        </>
    );
};

export default BlogsPage;