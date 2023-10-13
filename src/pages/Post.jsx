// import { useEffect, useState } from "react";

import { useState, useEffect } from "react";
import Navigation from '../components/navbar';
import { apiKey } from "../lib/api";

const initialPostState = {
  title: "No post found",
  body: "Nothing to see here",
  userId: null,
  id: null,
};

export default function PostPage() {
  const [post, setPost] = useState(initialPostState);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect", window.location.search);
    const fetchData = async () => {
      try {
        setLoading(true);

        const searchQuery = window.location.search;
        console.log("searchparams", searchQuery);
        const url = new URLSearchParams(searchQuery);
        const id = url.get("id");
        console.log(id);
        const accessToken = apiKey;
        const res = await fetch(
          `https://api.noroff.dev/api/v1/social/posts/${id}?_author=true`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        console.log(res, url, id, accessToken);

        const json = await res.json();
        setPost(json);
        console.log(json);
      } catch (error) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(post, "post");

  return (
    <>
      <Navigation />
      <h1>{post.title ? post.title : "Loading..."}</h1>
    </>
  );

  //   return (
  //     <>
  //       <h1>A single post</h1>
  //       <section>
  //         <h2>{post?.title}</h2>
  //       </section>
  //     </>
  //   );
  // }

  /*
export default function SinglePostPage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="min-h-screen md:container md:mx-auto bg-base-100 flex justify-center">
        <div className="w-full md:w-2/3 p-2">
          <div className="card w-full glass">
            <div className="flex flex-row py-4">
              <div className="avatar">
                <div className="w-16 rounded-full mx-5">
                  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>
              </div>
              <p className="flex-end text-sm capitalize pr-2 py-4">By Usessssr1 10.10.23 12:22</p>
            </div>

            <figure className="max-h-[400px] overflow-hidden">
              <img className="object-cover w-full h-full" src="https://source.unsplash.com/random" alt="Post image" />
            </figure>

            <div className="card-body prose">
              <h1 className="card-title">The Intricacies of Web Development</h1>
              <p className="text-start">Web development is a broad field, encompassing everything from the creation of simple web pages to the development of complex web applications. It involves multiple disciplines such as design, content creation, and coding, making it a continually evolving field.</p>
            </div>
          </div>
          <form>
  <div className="w-full mb-4  rounded-lg bg-base100-50 dark:bg-base-100">
    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
      <label htmlFor="comment" className="sr-only">Your comment</label>
      <textarea id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
    </div>
    <div className="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
      <button type="submit" className="btn btn-primary h-4">
        Post comment
      </button>

    </div>
  </div>
</form>

        </div>
      </div>
    </>
  );
}
*/
}
