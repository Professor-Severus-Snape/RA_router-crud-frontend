import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import PostContent from './PostContent/PostContent';
import PostEmotions from './PostEmotions/PostEmotions';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';

import type IPost from '../../models/IPost';
import './post.css';

const Post = forwardRef<HTMLLIElement, IPost>(({ id, content, created }, ref) => {
  const navigate = useNavigate();

  return (
    <li ref={ref} className="post" onClick={() => navigate(`/posts/${id}`)}>
      <PostHeader created={created} />
      <PostContent content={content} />
      <PostEmotions />
      <PostFooter />
    </li>
  );
});

export default Post;
