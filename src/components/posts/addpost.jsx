import { useState } from 'react';
import { apiKey, baseURL } from '../../lib/api';

export function PostForm({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');
    const [media, setMedia] = useState('');

    const storedUsername = localStorage.getItem('username');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const accessToken = apiKey;
            const response = await fetch(`${baseURL}/social/posts`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    body,
                    tags: tags.split(',').map((tag) => tag.trim()),
                    media,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newPost = await response.json();

            // Include correct author information
            newPost.author = {
                name: storedUsername
            };

            // Once the post is created, fetch the updated list
            const updatedPostsResponse = await fetch(`${baseURL}/social/profiles/${storedUsername}/posts`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!updatedPostsResponse.ok) {
                throw new Error(`HTTP error! status: ${updatedPostsResponse.status}`);
            }

            const updatedPosts = await updatedPostsResponse.json();

            // Update the local state with the updated list of posts.
            onAddPost(updatedPosts);

            // Reset form fields
            setTitle('');
            setBody('');
            setTags('');
            setMedia('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Media URL" value={media} onChange={(e) => setMedia(e.target.value)} />
            </div>
            <div>
                <button type="submit">Add Post</button>
            </div>
        </form>
    );
}
