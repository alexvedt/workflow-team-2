import { useState } from "react";
import { apiKey, baseURL } from "../../lib/api";
import StyledPostForm from "../postform";
import PropTypes from "prop-types";

export default function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [media, setMedia] = useState("");
  const [author, setAuthor] = useState("");

  const storedUsername = localStorage.getItem("username");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = apiKey;
      const response = await fetch(`${baseURL}/social/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          tags: tags.split(",").map((tag) => tag.trim()),
          media,
          author,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newPost = await response.json();

      // Include correct author information
      newPost.author = {
        name: storedUsername,
      };

      // Once the post is created, fetch the updated list
      const updatedPostsResponse = await fetch(
        `${baseURL}/social/profiles/${storedUsername}/posts`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!updatedPostsResponse.ok) {
        throw new Error(`HTTP error! status: ${updatedPostsResponse.status}`);
      }

      const updatedPosts = await updatedPostsResponse.json();

      // Update the local state with the updated list of posts.
      onAddPost(updatedPosts);

      // Reset form fields
      setTitle("");
      setBody("");
      setTags("");
      setMedia("");
      setAuthor("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StyledPostForm
      onSubmit={handleSubmit}
      title={title}
      body={body}
      tags={tags}
      media={media}
      setTitle={setTitle}
      setBody={setBody}
      setTags={setTags}
      setMedia={setMedia}
      handleSubmit={handleSubmit}
    />
  );
}

PostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};
