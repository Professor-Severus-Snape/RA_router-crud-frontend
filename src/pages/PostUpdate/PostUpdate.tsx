import { useParams } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import PostForm from '../../components/Post/PostForm/PostForm';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import './postUpdate.css';
import { useEffect, useState } from 'react';
import IPost from '../../models/IPost';

const PostUpdate = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  // получение поста по его id -> {post: {content: "Lorem...", id: 0, created: 123...}} :
  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      // задержка появления лоадера в 1 секунду (чтобы не мелькал при перезагрузке страницы):
      const loaderTimer = setTimeout(() => setLoading(true), 1000);

      try {
        const response = await fetch(baseUrl + `/posts/${id}`); // получаем данные с сервера

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setPost(data.post); // сохранение полученных данных в стейт
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
  }, [id]);

  return (
    <>
      <HeaderMenu path={`/posts/${id}`} text="Назад" />

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
