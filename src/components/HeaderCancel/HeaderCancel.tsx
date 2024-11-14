import { Link } from 'react-router-dom';
import './headerCancel.css';

const HeaderCancel = () => {
  return (
    <header className="header-cancel">
      <Link to="/" className="header-cancel__link">Назад</Link>
    </header>
  );
};

export default HeaderCancel;
