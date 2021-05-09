import { useState, useEffect } from 'react';
import './index.css';

function Post(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const data = await fetch(`https://shny.mbacalan.tk/api/news-items/${props.id}`);
      setPost(await data.json());
    }

    getPost()
  }, [props.id])

  return (
    <section>
      <div class="contain-div">
        <h1 class="trail-line-double">{post.title}</h1>

        <div className="info-blocks">
          {post.content}
        </div>
      </div>
    </section>
  )
}

export default Post;
