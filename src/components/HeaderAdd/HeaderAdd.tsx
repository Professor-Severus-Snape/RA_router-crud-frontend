import { Link } from 'react-router-dom';
import './headerAdd.css';

const HeaderAdd = () => {
  return (
    <header className="header-add">
      <Link to="/posts/new" className="header-add__link">Создать пост</Link>
    </header>
  );
};

export default HeaderAdd;
