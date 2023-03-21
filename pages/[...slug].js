import PostSummary from "../components/post-detail/post-summary";
import PostLogistics from "../components/post-detail/post-logistics";
import PostContent from "../components/post-detail/post-content";
import CommentsList from "../components/post-comments/comments-list";

const PostDetailPage = ({ postData, authorData, postCommentsData }) => {
  if (!postData) {
    return <p>No Event Found!!</p>;
  }

  return (
    <>
      <PostSummary title={postData.title} />
      <PostLogistics
        userId={postData.userId}
        image={postData.id}
        imageAlt={postData.title}
        autorName={authorData.name}
        authorPhone={authorData.phone}
        authorCompany={authorData.company.name}
      />
      <PostContent>
        <p>{postData.body}</p>
      </PostContent>
      <CommentsList postCommentsData={postCommentsData} postId={postData.id} />
    </>
  );
};

export async function getServerSideProps(context) {
  const postId = context.query.slug[0];
  const authorId = context.query.slug[1];
  // Fetch data from external API
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const postData = await postRes.json();

  const authorRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${authorId}`
  );
  const authorData = await authorRes.json();

  const postComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const postCommentsData = await postComments.json();

  // Pass data to the page via props
  return { props: { postData, authorData, postCommentsData } };
}

export default PostDetailPage;
