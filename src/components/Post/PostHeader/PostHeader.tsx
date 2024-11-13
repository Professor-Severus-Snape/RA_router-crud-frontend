import './postHeader.css';

const PostHeader = () => {
  const avatar = `https://i.pravatar.cc?key=${Math.random()}`; // NOTE: временно !!!

  return (
    <header className="post-header">
      {/* TODO: получать аватарку и автора!!! */}
      <img src={avatar} alt="avatar" className="post-header__avatar" />
      <div className="post-header__author">Severus Snape</div>
    </header>
  );
};

export default PostHeader;
