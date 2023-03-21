import UserList from "../../components/users/users-list";

const AllUsersPage = (props) => {
  return <UserList users={props.data} />;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default AllUsersPage;
