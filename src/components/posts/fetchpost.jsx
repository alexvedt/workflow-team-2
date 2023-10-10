import { useState, useCallback } from 'react';
import { apiKey, baseURL } from "../../lib/api";

export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const accessToken = apiKey;
            const response = await fetch(`${baseURL}/social/posts`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Sort posts by created date
            const sortedPosts = data.sort((a, b) => new Date(b.created) - new Date(a.created));

            // Filter out posts with empty body
            const nonEmptyPosts = sortedPosts.filter(post => post.body.trim() !== '');

            // Limit to 9
            const limitedPosts = nonEmptyPosts.slice(0, 9);

            setPosts(limitedPosts);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { posts, isLoading, error, fetchData };
};