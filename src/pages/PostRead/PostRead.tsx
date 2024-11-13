import { Link } from 'react-router-dom';
import HeaderCancel from '../../components/HeaderCancel/HeaderCancel';
import PostContent from '../../components/Post/PostContent/PostContent';
import PostEmotions from '../../components/Post/PostEmotions/PostEmotions';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import './postRead.css';

const PostRead = () => {
  return (
    <>
      <HeaderCancel />
      <div className="post">
        {/* TODO: передавать время создания поста: */}
        <PostHeader created={Date.now()}/>
        {/* TODO: передавать текст поста: */}
        <PostContent content='некий текст'/>
        <PostEmotions />
        <footer className="post__footer">
          <div className="post__links">
            {/* TODO: поменять роуты! */}
            <Link to="/" className="post__change">Изменить</Link>
            <Link to="/" className="post__delete">Удалить</Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PostRead;
