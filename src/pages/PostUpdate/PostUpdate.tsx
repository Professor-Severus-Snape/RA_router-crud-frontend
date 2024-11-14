import { useParams } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import PostForm from '../../components/Post/PostForm/PostForm';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import './postUpdate.css';
import { useEffect, useState } from 'react';
import IPost from '../../models/IPost';

const PostUpdate = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();

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

  return (
    <>
      <HeaderMenu path={`/posts/${id}`} text="Назад"/>
      {post && (
        <div className="post">
          <PostHeader created={post.created} />
          <PostForm btnAction="Сохранить" textContent={post.content} />
        </div>
      )}
    </>
  );
};

export default PostUpdate;
