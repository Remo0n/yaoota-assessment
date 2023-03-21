import { useState } from "react";
import PostItem from "./post-item";
import Button from "../ui/button";

import classes from "./post-list.module.css";

const PostList = (props) => {
  const { posts } = props;
  const [visible, setVisible] = useState(20);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  return (
    <>
      <ul role="postList" className={classes.list}>
        {posts?.slice(0, visible).map((post) => (
          <PostItem
            id={post.id}
            title={post.title}
            email={post.email}
            image={post.id}
            userId={post.userId}
            key={post.id}
          />
        ))}
      </ul>
      <div className={classes.footer}>
        <Button
          disabled={visible >= posts?.length}
          title="Load More ..."
          click={showMoreItems}
          testId="load-posts-btn"
        />
      </div>
    </>
  );
};

export default PostList;
