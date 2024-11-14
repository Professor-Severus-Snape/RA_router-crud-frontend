import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import PostContent from '../../components/Post/PostContent/PostContent';
import PostEmotions from '../../components/Post/PostEmotions/PostEmotions';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import IPost from '../../models/IPost';
import './postRead.css';

const PostRead = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams(); // NB! название динамического параметра должно строго совпадать!!!

  // получение поста по его id -> {post: {content: "Lorem...", id: 0, created: 123...}} :
  useEffect(() => {
    const createGetRequest = async () => {
      const baseUrl = import.meta.env.VITE_BASE_URL;

      try {
        const response = await fetch(baseUrl + `/posts/${id}`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setPost(json.post);
      } catch {
        setPost(null);
      }
    };

    createGetRequest();
  }, [id]);

  const createDeleteRequest = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      await fetch(baseUrl + `/posts/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.log('err: ', err);
    }
  };

  return (
    <>
      <HeaderMenu />
      {post && (
        <div className="post">
          <PostHeader created={post.created} />
          <PostContent content={post.content} />
          <PostEmotions />
          <footer className="post__footer">
            <div className="post__links">
              <Link to={`/posts/update/${id}`} className="post__change">Изменить</Link>
              <Link to="/" className="post__delete" onClick={createDeleteRequest}>Удалить</Link>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default PostRead;
