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

  const createPostRequest = async (validContent: string) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: validContent,
      }),
    };

    try {
      await fetch(baseUrl + '/posts', options);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const createPutRequest = async (validContent: string) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: validContent,
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // отмена перезагрузки страницы

    const validContent = content.trim();

    // если заметка пустая:
    if (!validContent) {
      setContent(''); // очистка поля textarea от пробелов
      return;
    }

    switch (btnAction) {
      case 'Опубликовать':
        await createPostRequest(validContent); // POST-запрос на сервер с данными textarea <- CREATE
        navigate('/'); // возврат на главную страницу только ПОСЛЕ! завершения запроса
        return;
      case 'Сохранить':
        await createPutRequest(validContent); // PUT-запрос на сервер с данными textarea <- UPDATE
        // ПОСЛЕ! завершения запроса - возврат на главную страницу к отредактированному посту:
        navigate(`/#${id}`);
      }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea className="post-form__textarea" value={content} onChange={handleChange} required />
      <button type="submit" className="post-form__btn">{btnAction}</button>
    </form>
  );
};

export default PostForm;
