import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Post from '../../components/Post/Post';
import IPost from '../../models/IPost';
import './posts.css';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const location = useLocation(); // для дальнейшего считывания хэша из адресной строки

  // получение всех постов с сервера:
  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      // задержка появления лоадера в 500ms (чтобы не мелькал при перезагрузке страницы):
      const loaderTimer = setTimeout(() => setLoading(true), 500);

      try {
        const response = await fetch(baseUrl + '/posts'); // получаем данные с сервера
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setPosts(data); // сохранение полученных данных в стейт
        setError(null); // нет ошибки
      } catch (err) {
        if (err instanceof Error) {
          setError(err); // возникла ошибка
        }
      } finally {
        clearTimeout(loaderTimer); // очищаем таймаут, на случай если лоадер не успел отрисоваться
        setLoading(false); // загрузка данных завершена
      }
    };

    fetchData();
  }, []);

  // скролл до нужного поста:
  useEffect(() => {
    const postIdFromHash = location.hash.slice(1); // "" или "6"
    if (postIdFromHash) {
      const postElement = document.getElementById(postIdFromHash); // null или <li id="6">...</li>
      if (postElement) {
        postElement.scrollIntoView({ behavior: 'smooth' });

        // добавление подсветки к нужному посту:
        postElement.classList.add('highlight');
        setTimeout(() => postElement.classList.remove('highlight'), 2 * 1000);
      }
    }
  }, [posts, location.hash]);

  return (
    <>
      {error && (
        <div className="content__text">
          Sorry, you've got the Error: {error.message}
        </div>
      )}

      {loading && (
        <div className="content__text">
          Still loading... Wait a moment! Please, don't go away!
        </div>
      )}

      {!error && !loading && (
        <>
          <HeaderMenu path="/posts/new" text="Создать пост" />
          <ul className="posts">
            {posts.length
              ? posts
                  .map((post: IPost) => <Post key={post.id} {...post} />)
                  .reverse()
              : null}
          </ul>
        </>
      )}
    </>
  );
};

export default Posts;
