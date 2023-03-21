import classes from "./comment-item.module.css";
const CommentItem = ({ name, body }) => {
  return (
    <div className={classes.comment}>
      <p className={classes.commentHeader}>{name}</p>
      <p className={classes.commentBody}>- {body}</p>
    </div>
  );
};

export default CommentItem;
