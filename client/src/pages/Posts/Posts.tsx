import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import type IPost from '../../models/IPost';

import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Post from '../../components/Post/Post';
import './posts.css';

const Posts = () => {
  const { data: posts, error, loading } = useFetch<IPost[]>('/posts'); // получение списка постов
  const location = useLocation(); // для считывания хэша из адресной строки
  const postRefs = useRef<Record<string, HTMLLIElement | null>>({}); // Record<Key="id", Value=el>

  useEffect(() => {
    const postIdFromHash = location.hash.slice(1); // "" или "6"
    if (!postIdFromHash) return;

    const postElement = postRefs.current[postIdFromHash]; // null или <li id="6">...</li>
    if (!postElement) return;

    postElement.scrollIntoView({ behavior: 'smooth' }); // скролл до нужного поста
    postElement.classList.add('highlight'); // добавляем подсветку к нужному посту на 2 сек
    const timer = setTimeout(() => postElement.classList.remove('highlight'), 2000); // убираем её
    return () => clearTimeout(timer);
  }, [location.hash, posts]);

  return (
    <>
      {error && <div className="content__text">Sorry, you've got the Error: {error}</div>}

      {loading && (
        <div className="content__text">Still loading... Wait a moment! Please, don't go away!</div>
      )}

      {!error && !loading && (
        <>
          <HeaderMenu path="/posts/new" text="Создать пост" />
          <ul className="posts">
            {posts?.map((post) => (
              <Post
                key={post.id}
                {...post}
                ref={(element) => {
                  postRefs.current[String(post.id)] = element;
                }}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Posts;
