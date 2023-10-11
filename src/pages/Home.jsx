import { useEffect } from "react";
import { useFetchPosts } from "../components/posts/fetchpost";

export default function HomePage() {
  const { posts, isLoading, error, fetchData } = useFetchPosts();

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  if (isLoading) return <h1>Loading...</h1>;

  if (error) {
    return (
      <div className="bg-red-500">
        <h1 className="">Something went wrong! {error?.message}</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Index/ Home Page</h1>

      <section>
        {posts.map((post) => (
          <div key={post.id}>{post?.title}</div>
        ))}
      </section>
    </>
  );
}