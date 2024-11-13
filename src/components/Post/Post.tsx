import PostContent from './PostContent/PostContent';
import PostEmotions from './PostEmotions/PostEmotions';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import IPost from '../../models/IPost';
import './post.css';

const Post = ({ id, content, created }: IPost) => {
  return (
    <li className="post" data-id={id}>
      <PostHeader created={created} />
      <PostContent content={content} />
      <PostEmotions />
      <PostFooter />
    </li>
  );
};

export default Post;
