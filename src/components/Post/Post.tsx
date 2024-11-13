import PostContent from './PostContent/PostContent';
import PostEmotions from './PostEmotions/PostEmotions';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import './post.css';

const Post = () => {
  return (
    <li className="post">
      <PostHeader />
      <PostContent />
      <PostEmotions />
      <PostFooter />
    </li>
  );
};

export default Post;
