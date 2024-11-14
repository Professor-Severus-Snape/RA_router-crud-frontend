import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './postForm.css';

const PostForm = ({ btnAction }: { btnAction: string }) => {
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();

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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setContent(value); // сохранение в стейте содержимого textarea
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // отмена перезагрузки страницы
    createPostRequest(); // отправка POST-запроса на сервер с данными textarea
    navigate('/'); // возврат на главную страницу
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      {/* TODO: передавать value при редактировании поста!!! */}
      <textarea className="post-form__textarea" onChange={handleChange} />
      <button type="submit" className="post-form__btn">{btnAction}</button>
    </form>
  );
};

export default PostForm;
