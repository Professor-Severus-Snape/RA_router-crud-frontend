import { Link } from 'react-router-dom';
import './headerCancel.css';

const HeaderCancel = () => {
  return (
    <header className="header-cancel">
      {/* TODO: поменять роут у ссылки */}
      <Link to="/" className="header-cancel__link">Назад</Link>
    </header>
  );
};

export default HeaderCancel;
