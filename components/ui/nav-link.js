import Link from "next/link";

import classes from "./nav-link.module.css";

const NavLink = (props) => {
  return (
    <Link href={props.link}>
      <div className={classes.btn}>{props.children}</div>
    </Link>
  );
};

export default NavLink;
