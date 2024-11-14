import { Link } from 'react-router-dom';
import './headerMenu.css';

interface IHeaderMenuProps {
  path?: string;
  text?: string;
}

const HeaderMenu = ({ path = '/', text = 'На главную'}: IHeaderMenuProps) => {
  return (
    <header className="header-menu">
      <Link to={path} className="header-menu__link">{text}</Link>
    </header>
  );
};

export default HeaderMenu;
