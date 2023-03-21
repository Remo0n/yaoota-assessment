import { render, screen, fireEvent } from "@testing-library/react";
import PostList from "../components/posts/post-list";
import { posts } from "../dummy-data";

describe("PostList component", () => {
  it("renders the correct number of posts", () => {
    render(<PostList posts={posts} />);
    const postItems = screen.getAllByRole("postItem");
    expect(postItems).toHaveLength(20);
  });

  it("renders a load more button", () => {
    render(<PostList posts={posts} />);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    expect(loadMoreButton).toBeInTheDocument();
  });

  it("loads more posts when the load more button is clicked", () => {
    render(<PostList posts={posts} />);
    const initialVisiblePosts = screen.getAllByRole("postItem");
    console.log(initialVisiblePosts.length);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    fireEvent.click(loadMoreButton);
    const visiblePostsAfterClick = screen.getAllByRole("postItem");
    console.log(visiblePostsAfterClick.length);
    expect(visiblePostsAfterClick.length).toBeGreaterThan(
      initialVisiblePosts.length
    );
  });
});
