import likeIcon from '../../../assets/like.svg';
import commentIcon from '../../../assets/comment.svg';
import './postEmotions.css';

const PostEmotions = () => {
  return (
    <div className="post-emotions">
      <div className="post-emotions__likes">
        <img src={likeIcon} alt="Нравится" className="post-emotions__like-icon" />
        <div className="post-emotions__like-text">Нравится</div>
      </div>
      <div className="post-emotions__comments">
        <img
          src={commentIcon}
          alt="Комментировать"
          className="post-emotions__comment-icon"
        />
        <div className="post-emotions__comment-text">Комментировать</div>
      </div>
    </div>
  );
};

export default PostEmotions;
