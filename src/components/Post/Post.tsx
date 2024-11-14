import { useNavigate } from 'react-router-dom';
import PostContent from './PostContent/PostContent';
import PostEmotions from './PostEmotions/PostEmotions';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import IPost from '../../models/IPost';
import './post.css';

const Post = ({ id, content, created }: IPost) => {
  const navigate = useNavigate();

  return (
    <li className="post" onClick={() => navigate(`/posts/${id}`)}>
      <PostHeader created={created} />
      <PostContent content={content} />
      <PostEmotions />
      <PostFooter />
    </li>
  );
};

export default Post;
