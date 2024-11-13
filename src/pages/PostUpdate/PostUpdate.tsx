import HeaderCancel from '../../components/HeaderCancel/HeaderCancel';
import PostForm from '../../components/Post/PostForm/PostForm';
import PostHeader from '../../components/Post/PostHeader/PostHeader';
import './postUpdate.css';

const PostUpdate = () => {
  return (
    <>
      <HeaderCancel />
      <div className="post">
        {/* TODO: передавать дату и время поста!!! */}
        <PostHeader created={Date.now()}/>
        {/* TODO: получать текст заметки и передавать в форму!!! */}
        <PostForm btnAction="Сохранить" />
      </div>
    </>
  );
};

export default PostUpdate;
