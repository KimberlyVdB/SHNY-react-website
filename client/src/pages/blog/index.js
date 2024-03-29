import { useState, useEffect } from 'react';
import { Link } from "@reach/router"
import './index.css';
import SkrittVector from '../../imgs/SkrittVectorcut.png';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      const data = await fetch('https://shny.mbacalan.ml/news-items/');
      setBlogs([...await data.json()]);
    }

    getBlogs()
  }, [])

  return (
    <section>
      <div className="blog-wrapper">
        <div className="info-intro">
          <h1 className="trail-line-double">SHNY News</h1>
        </div>

        {blogs.map(blog =>
          <div className="blog" key={blog.id}>
            <h3 className="trail-line trail-line-blog">
              <Link to={'/blog/' + blog.id}>{blog.title}</Link>
            </h3>

            <span className="blog-date">
              {new Date(blog.updatedAt).toLocaleDateString("be")}
            </span>
          </div>
        )}
        <img className="skritt-vector" alt="skritt-vector" src={SkrittVector}></img>
      </div>
    </section>
  )
}

export default Blog;
