import PostList from "../components/posts/post-list";

const AllPostsPage = (props) => {
  return <PostList posts={props.data} />;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default AllPostsPage;
