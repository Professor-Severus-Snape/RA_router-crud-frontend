import './postFooter.css';

const PostFooter = () => {
  return (
    <footer className="post-footer">
      <img src="https://i.pravatar.cc" alt="avatar" className="post-footer__avatar" />
      <label htmlFor="comment" className="visually-hidden">Ваш комментарий</label>
      {/* TODO: иконки через img */}
      <input
        id="comment"
        type="text"
        className="post-footer__input"
        placeholder="Напишите комментарий..."
      />
    </footer>
  );
};

export default PostFooter;
