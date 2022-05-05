import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

function Post(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const data = await fetch(`https://shny.mbacalan.ml/news-items/${props.id}`);
      setPost(await data.json());
    }

    getPost()
  }, [props.id])

  return (
    <section>
      <div className="contain-div">
        <h1 className="trail-line-double">{post.title}</h1>

        <div>
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default Post;
