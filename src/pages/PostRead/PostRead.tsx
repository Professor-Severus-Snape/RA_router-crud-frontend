import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderCancel from '../../components/HeaderCancel/HeaderCancel';
import PostContent from '../../components/Post/PostContent/PostContent';
import PostEmotions from '../../components/Post/PostEmotions/PostEmotions';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import IPost from '../../models/IPost';
import './postRead.css';

const PostRead = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams(); // NB! название динамического параметра должно строго совпадать!!!

  useEffect(() => {
    // TODO: вынести функцию 'createGetRequest' в кастомный хук - ???
    const createGetRequest = async () => {
      const baseUrl = import.meta.env.VITE_BASE_URL;

      try {
        const response = await fetch(baseUrl + `/posts/${id}`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json(); // {post: {content: "Lorem...", id: 0, created: 123...}}
        setPost(json.post);
      } catch (err) {
        console.log('err: ', err);
      }
    };

    createGetRequest();
  }, [id]);

  return (
    <>
      <HeaderCancel />
      {/* FIXME: Нужна ли здесь проверка на post - ??? Может быть добавить ошибку... */}
      {post && (
        <div className="post">
          <PostHeader created={post.created} />
          <PostContent content={post.content} />
          <PostEmotions />
          <footer className="post__footer">
            <div className="post__links">
              {/* TODO: поменять роуты! */}
              <Link to="/" className="post__change">Изменить</Link>
              <Link to="/" className="post__delete">Удалить</Link>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default PostRead;
