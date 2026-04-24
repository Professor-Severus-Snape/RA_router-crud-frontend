import { useEffect, useState } from 'react';
import spinner from '../../assets/spinner.svg';
import './loader.css';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 500); // чтобы лоадер не мелькал
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="loader">
      <img className="loader__img" src={spinner} alt="spinner" />
      <div className="loader__content">
        <p className="loader__text">
          Сервер размещён на бесплатном хостинге и может «засыпать» после 15 минут бездействия.
        </p>
        <p className="loader__text">Запуск обычно занимает 30–60 секунд.</p>
        <p className="loader__text">Пожалуйста, дождитесь загрузки страницы.</p>
      </div>
    </div>
  );
};

export default Loader;
