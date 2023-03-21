import UserItem from "./user-item";
import classes from "./users-list.module.css";

const UserList = (props) => {
  const { users } = props;
  return (
    <ul className={classes.list}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          mail={user.email}
          address={user.address}
          phone={user.phone}
          website={user.website}
        />
      ))}
    </ul>
  );
};

export default UserList;
