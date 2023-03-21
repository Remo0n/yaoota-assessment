import NavLink from "../ui/nav-link";
import UserIcon from "../icons/user-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, userId, id } = props;

  const exploreLink = `/${id}/${userId}`;
  return (
    <li role="postItem" key={id} className={classes.item}>
      <img src={`https://picsum.photos/id/${image}/1000/1000`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.writer}>
            <UserIcon />
            <p>Writer No:{userId}</p>
          </div>
        </div>
        <div className={classes.actions}>
          <NavLink link={exploreLink}>
            <span>Explore Post</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
