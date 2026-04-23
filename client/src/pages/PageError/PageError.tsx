import { Link } from 'react-router-dom';
import './pageError.css';

const PageError = () => {
  return (
    <div className="page-error">
      <h1 className="page-error__title">Oops!</h1>
      <p className="page-error__text">Sorry, an unexpected error has occurred.</p>
      <p className="page-error__text">Please try again later.</p>
      <Link className="page-error__btn" to="/">Home</Link>
    </div>
  );
};

export default PageError;
