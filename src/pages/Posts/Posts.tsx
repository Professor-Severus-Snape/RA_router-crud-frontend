import HeaderAdd from '../../components/HeaderAdd/HeaderAdd';
import Post from '../../components/Post/Post';
import './posts.css';

const Posts = () => {
  return (
    <>
      <HeaderAdd />
      <ul className="posts">
        <Post />
        <Post />
        <Post />
      </ul>
    </>
  );
};

export default Posts;
