import iconSmile from '../../../assets/smile.svg';
import iconCamera from '../../../assets/camera.svg';
import iconGif from '../../../assets/gif.svg';
import iconNote from '../../../assets/note.svg';
import './postFooter.css';

const PostFooter = () => {
  const avatar = `${import.meta.env.BASE_URL}avatar.jpeg`;

  return (
    <footer className="post-footer">
      <img src={avatar} alt="avatar" className="post-footer__avatar" />
      <label htmlFor="comment" className="visually-hidden">Ваш комментарий</label>
      <div className="post-footer__input-with-icons">
        <input
          id="comment"
          type="text"
          className="post-footer__input"
          placeholder="Напишите комментарий..."
        />
        <img src={iconSmile} alt="smile" className="post-footer__icon post-footer__icon_smile" />
        <img src={iconCamera} alt="camera" className="post-footer__icon post-footer__icon_camera" />
        <img src={iconGif} alt="gif" className="post-footer__icon post-footer__icon_gif" />
        <img src={iconNote} alt="note" className="post-footer__icon post-footer__icon_note" />
      </div>
    </footer>
  );
};

export default PostFooter;
