import { useState } from 'react';
import HeaderCancel from '../../components/HeaderMenu/HeaderMenu';
import PostForm from '../../components/Post/PostForm/PostForm';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import './postCreate.css';

const PostCreate = () => {
  const [created] = useState(() => Date.now());

  return (
    <>
      <HeaderCancel />
      <div className="post">
        <PostHeader created={created} />
        <PostForm btnAction="Опубликовать" />
      </div>
    </>
  );
};

export default PostCreate;
