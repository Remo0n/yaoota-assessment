import UserIcon from "../icons/user-icon";
import MailIcon from "../icons/mail-icon";
import PhoneIcon from "../icons/phone-icon";
import LocationIcon from "../icons/location-icon";
import WebsiteIcon from "../icons/website-icon";
import classes from "./user-item.module.css";
const UserItem = (props) => {
  const { key, name, mail, address, phone, website } = props;
  return (
    <li key={key} className={classes.item}>
      <div className={classes.profile}>{name.match(/\b(\w)/g).join("")}</div>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{name}</h2>
          <ul className={classes.info}>
            <li>
              <MailIcon />
              <span> {mail}</span>
            </li>
            <li>
              <PhoneIcon />
              <span> {phone}</span>
            </li>
            <li>
              <WebsiteIcon />
              <span> {website}</span>
            </li>
            <li>
              <LocationIcon />
              <span> {address.city}</span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
