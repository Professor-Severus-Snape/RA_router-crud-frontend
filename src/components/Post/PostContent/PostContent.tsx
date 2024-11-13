const PostContent = ({ content }: { content: string }) => {
  return (
    <div className="post-content">
      <p>{content}</p>
    </div>
  );
};

export default PostContent;
