import { useState, useEffect } from "react";
import CommentItem from "./comment-item";
import CommentForm from "./comment-form";
import classes from "./comment-list.module.css";
const CommetsList = ({ postCommentsData, postId }) => {
  const [comments, setComments] = useState(postCommentsData);
  const updateComments = (newComment) => {
    setComments([...comments, newComment]);
  };
  console.log(comments);
  return (
    <div className={classes.commentBox}>
      <h3>{comments.length} Comments</h3>
      <div className="comment-list">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            name={comment.name}
            body={comment.body}
          />
        ))}
      </div>
      <h2>Write your comment...</h2>
      <CommentForm updateComments={updateComments} postId={postId} />
    </div>
  );
};

export default CommetsList;
