import { useState, useEffect } from 'react';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Post from '../../components/Post/Post';
import IPost from '../../models/IPost';
import './posts.css';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  // получение всех постов с сервера:
  useEffect(() => {
    const createGetRequest = async () => {
      const baseUrl = import.meta.env.VITE_BASE_URL;

      try {
        const response = await fetch(baseUrl + '/posts');

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setPosts(json.reverse()); // отображение самого свежего поста сверху
      } catch {
        setPosts([]);
      }
    };

    createGetRequest();
  }, []);

  return (
    <>
      <HeaderMenu path="/posts/new" text="Создать пост" />
      <ul className="posts">
        {posts.length
          ? posts.map((post) => <Post key={post.id} {...post} />)
          : null}
      </ul>
    </>
  );
};

export default Posts;
