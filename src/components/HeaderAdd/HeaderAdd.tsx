import { Link } from 'react-router-dom';
import './headerAdd.css';

const HeaderAdd = () => {
  return (
    <header className="header-add">
      {/* TODO: поменять роут у ссылки */}
      <Link to="/" className="header-add__link">Создать пост</Link> 
    </header>
  );
};

export default HeaderAdd;
