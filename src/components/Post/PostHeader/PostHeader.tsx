import './postHeader.css';

const PostHeader = ({ created }: {created: number}) => {
  const date = new Date(created).toLocaleDateString(); // "14.11.2024" <- дата
  const time = new Date(created).toLocaleTimeString(); // "01.01.27"   <- время

  return (
    <header className="post-header">
      <img src="https://i.pravatar.cc" alt="avatar" className="post-header__avatar" />
      <div className="post-header__info">
        <div className="post-header__author">Name Surname</div>
        <div className="post-header__date">
          {date} {time}
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
