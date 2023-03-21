import LogisticsItem from "./logistics-item";
import UserIcon from "../icons/user-icon";
import PhoneIcon from "../icons/phone-icon";
import WorkIcon from "../icons/work-icon";
import classes from "./post-logistics.module.css";

function PostLogistics(props) {
  const { image, imageAlt, autorName, authorPhone, authorCompany } = props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img
          src={`https://picsum.photos/id/${image}/1000/1000`}
          alt={imageAlt}
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={UserIcon}>
          <span>{autorName}</span>
        </LogisticsItem>
        <LogisticsItem icon={PhoneIcon}>
          <span>{authorPhone}</span>
        </LogisticsItem>
        <LogisticsItem icon={WorkIcon}>
          <span>{authorCompany}</span>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default PostLogistics;
