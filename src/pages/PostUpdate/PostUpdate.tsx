import { useParams } from 'react-router-dom';
import HeaderCancel from '../../components/HeaderCancel/HeaderCancel';
import PostForm from '../../components/Post/PostForm/PostForm';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import './postUpdate.css';
import { useEffect, useState } from 'react';
import IPost from '../../models/IPost';

const PostUpdate = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();

  useEffect(() => {
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
          {/* TODO: передавать дату и время поста!!! */}
          <PostHeader created={post.created} />
          {/* TODO: получать текст заметки и передавать в форму!!! */}
          <PostForm btnAction="Сохранить" textContent={post.content} />
        </div>
      )}
    </>
  );
};

export default PostUpdate;
