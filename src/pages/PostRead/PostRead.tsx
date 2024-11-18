import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import PostContent from '../../components/Post/PostContent/PostContent';
import PostEmotions from '../../components/Post/PostEmotions/PostEmotions';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import IPost from '../../models/IPost';
import './postRead.css';

const PostRead = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { id } = useParams(); // NB! название динамического параметра должно строго совпадать!!!

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

  const createDeleteRequest = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      await fetch(baseUrl + `/posts/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.log('err: ', err);
    }
    navigate('/'); // возврат на главную страницу только ПОСЛЕ! завершения запроса
  };

  return (
    <>
      <HeaderMenu />

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
          <PostContent content={post.content} />
          <PostEmotions />
          <footer className="post__footer">
            <div className="post__links">
              <Link to={`/posts/update/${id}`} className="post__change">Изменить</Link>
              <button type="button" className="post__delete" onClick={createDeleteRequest}>Удалить</button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default PostRead;
