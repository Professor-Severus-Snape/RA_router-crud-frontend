import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './postForm.css';

interface IPostFormProps {
  btnAction: string;
  textContent?: string;
}

const PostForm = ({ btnAction, textContent = '' }: IPostFormProps) => {
  const [content, setContent] = useState<string>(textContent);
  const navigate = useNavigate();
  const { id } = useParams();

  const createPostRequest = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
      }),
    };

    try {
      await fetch(baseUrl + '/posts', options);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const createPutRequest = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
      }),
    };

    try {
      await fetch(baseUrl + `/posts/${id}`, options);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setContent(value); // сохранение в стейте содержимого textarea
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // отмена перезагрузки страницы
    switch (btnAction) {
      case 'Опубликовать':
        createPostRequest(); // отправка POST-запроса на сервер с данными textarea <- CREATE
        navigate('/'); // возврат на главную страницу
        return;
      case 'Сохранить':
        createPutRequest(); // отправка PUT-запроса на сервер с данными textarea <- UPDATE
        navigate('/'); // возврат на главную страницу
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea className="post-form__textarea" value={content} onChange={handleChange} />
      <button type="submit" className="post-form__btn">{btnAction}</button>
    </form>
  );
};

export default PostForm;
