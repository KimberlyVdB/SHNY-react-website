import { useState, useEffect } from 'react';
import { Link } from "@reach/router"
import './index.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      const data = await fetch('https://shny.mbacalan.tk/api/news-items/');
      setBlogs([...await data.json()]);
    }

    getBlogs()
  }, [])

  return (
    <section>
      <div class="contain-div">
        <div class="info-intro">
          <h1 class="trail-line-double">SHNY Shenanigan</h1>
        </div>

        {blogs.map(blog =>
          <div className="blog">
            <h3 className="trail-line">
              <Link to={'/blog/' + blog.id}>{blog.title}</Link>
            </h3>

            <span className="blog-date">
              {new Date(blog.updated_at).toLocaleDateString("be")}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog;
