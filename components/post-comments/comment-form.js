import { useState } from "react";
import Button from "../ui/button";
import classes from "./comment-form.module.css";
const CommentForm = ({ updateComments, postId }) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            body: body,
          }),
        }
      );
      let resJson = await res.json();
      let id = resJson.id;
      if (res.status === 201) {
        console.log(res, resJson);
        updateComments({ name, body, id });
        setName("");
        setBody("");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={classes.commentForm} onSubmit={handleSubmit}>
      <div className={classes.commentFormFields}>
        <input
          placeholder="Name"
          required
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <textarea
          placeholder="Comment"
          rows="4"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className={classes.commentFormActions}>
        <Button title="Post Comment" type="submit" />
      </div>
    </form>
  );
};

export default CommentForm;
