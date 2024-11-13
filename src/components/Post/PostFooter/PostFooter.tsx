import './postFooter.css';

const PostFooter = () => {
  const avatar = `https://i.pravatar.cc?key=${Math.random()}`; // NOTE: временно !!!

  return (
    <footer className="post-footer">
      {/* TODO: получать аватарку!!! */}
      <img src={avatar} alt="avatar" className="post-footer__avatar" />
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
