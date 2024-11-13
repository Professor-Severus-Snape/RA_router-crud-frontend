import HeaderCancel from '../../components/HeaderCancel/HeaderCancel';
import PostForm from '../../components/Post/PostForm/PostForm';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import './postCreate.css';

const PostCreate = () => {
  return (
    <>
      <HeaderCancel />
      <div className="post">
        <PostHeader created={Date.now()}/>
        <PostForm btnAction="Опубликовать" />
      </div>
    </>
  );
};

export default PostCreate;
