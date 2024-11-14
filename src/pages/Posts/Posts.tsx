import { useState, useEffect } from 'react';
import HeaderAdd from '../../components/HeaderAdd/HeaderAdd';
import Post from '../../components/Post/Post';
import IPost from '../../models/IPost';
import './posts.css';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  // TODO: вынести в кастомный хук:
  const createGetRequest = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    try {
      const response = await fetch(baseUrl + '/posts');

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setPosts(json.reverse()); // отображение самого свежего поста сверху
    } catch (err) {
      console.log('err: ', err);
    }
  };

  useEffect(() => {
    createGetRequest();
  }, []); // FIXME: Что указать в зависимостях, чтобы при создании поста, пост сразу подтягивался?

  return (
    <>
      <HeaderAdd />
      <ul className="posts">
        {posts.length
          ? posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                content={post.content}
                created={post.created}
              />
            ))
          : null}
      </ul>
    </>
  );
};

export default Posts;
