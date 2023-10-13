// /**
//  * Displays a single profile
//  * @see https://docs.noroff.dev/social-endpoints/profiles
//  */

import Navigation from "../components/navbar";
import { useState } from "react";
import { useFetchCurrentUserPosts } from "../components/posts/fetchpost";
import { PostForm } from "../components/posts/addpost";

export default function ProfilePage() {
  const storedUsername = localStorage.getItem("username");
  const storedAccessToken = localStorage.getItem("access_token");

  const { posts, isLoading, error } = useFetchCurrentUserPosts(storedUsername, storedAccessToken);
  const [updatedPosts, setUpdatedPosts] = useState([]);

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
          <div key={post.id}>
            <div>By: {post.author}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>Tags: {post.tags.join(", ")}</div>
            <div>{post.media}</div>
            <div>Created: {post.created}</div>
            <div>Updated: {post.updated}</div>
          </div>
        ))}
      </section>
    </>
  );
}
