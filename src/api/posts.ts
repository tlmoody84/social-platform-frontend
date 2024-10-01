import { Post } from '@/types/Post';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4001'; 

// Fetch all posts
export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch(`${API_BASE_URL}/api/posts`); // Ensure the correct URL
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    // Assert the response data as Post[]
    return (await response.json()) as Post[];
};

// Fetch a single post by ID
export const getPostById = async (id: number): Promise<Post> => {
    const response = await axios.get(`${API_BASE_URL}/api/posts/${id}`);
    // Assert the response data as Post
    return response.data as Post;
};

// Create a new post
export const createPost = async (content: string): Promise<Post> => {
    const response = await axios.post(`${API_BASE_URL}/api/posts`, { content });
    // Assert the response data as Post
    return response.data as Post;
};
