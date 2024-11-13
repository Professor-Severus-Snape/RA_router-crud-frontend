import './postForm.css';

const PostForm = ({ btnAction }: { btnAction: string }) => {
  return (
    <form className="post-form">
      {/* TODO: передавать value при редактировании поста!!! */}
      <textarea className="post-form__textarea" />
      <button type="submit" className="post-form__btn">{btnAction}</button>
    </form>
  );
};

export default PostForm;
