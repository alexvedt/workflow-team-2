// import { useEffect, useState } from "react";

// const initialPostState = {
//   title: "No post found",
//   body: "Nothing to see here",
//   userId: null,
//   id: null,
// };

// /**
//  * Displays a single post
//  * @see https://docs.noroff.dev/social-endpoints/posts
//  */
// export default function PostPage() {
//   const [post, setPost] = useState(initialPostState);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // TIP: Get the ID from the search params in the URL
//         // TIP: Fetch the post from the API using the ID
//         // TIP: Set the post in state
//       } catch (error) {
//         // TIP: Handle errors from the API
//       } finally {
//         // TIP: Set loading to false
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>A single post</h1>
//       <section>
//         <h2>{post?.title}</h2>
//       </section>
//     </>
//   );
// }


export default function SinglePostPage() {
  return (
    <>
      <div className="min-h-screen md:container md:mx-auto bg-base-100 flex justify-center">
        <div className="w-full md:w-2/3 p-2">
          <div className="card w-full glass">
            <div className="flex flex-row py-4">
              <div className="avatar">
                <div className="w-16 rounded-full mx-5">
                  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>
              </div>
              <p className="flex-end text-sm capitalize pr-2 py-4">By User1 10.10.23 12:22</p>
            </div>

            <figure className="max-h-[400px] overflow-hidden">
              <img className="object-cover w-full h-full" src="https://source.unsplash.com/random" alt="Post image" />
            </figure>

            <div className="card-body prose">
              <h1 className="card-title">The Intricacies of Web Development</h1>
              <p className="text-start">Web development is a broad field, encompassing everything from the creation of simple web pages to the development of complex web applications. It involves multiple disciplines such as design, content creation, and coding, making it a continually evolving field.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
