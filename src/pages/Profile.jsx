/**
 * Displays a single profile
 * @see https://docs.noroff.dev/social-endpoints/profiles
 */

import { useState } from "react";
import Navigation from "../components/navbar";
import { useFetchCurrentUserPosts } from "../components/posts/fetchpost";
import { PostForm } from "../components/posts/addpost";


export default function ProfilePage() {
  const { posts, isLoading, error } = useFetchCurrentUserPosts();
  const [updatedPosts, setUpdatedPosts] = useState(posts);

  const handleAddPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setUpdatedPosts(updatedPosts);
  };

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
      <header>
        <Navigation />
      </header>
      <h1>Profile Page</h1>
      <PostForm onAddPost={handleAddPost} />

      <section>
        {posts.map((post) => (
          <div key={post.id}>{post?.title}</div>
        ))}
      </section>
    </>
  );
}