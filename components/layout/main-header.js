import Link from "next/link";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header data-testid="navbar" className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Yaoota Posts</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/">All posts</Link>
          </li>
          <li>
            <Link href="/users">All users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
