import { Post } from '@/types/Post';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4001'; 

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch(`${API_BASE_URL}/api/posts`); 
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return (await response.json()) as Post[];
};

export const getPostById = async (id: number): Promise<Post> => {
    const response = await axios.get(`${API_BASE_URL}/api/posts/${id}`);
    // Assert the response data as Post
    return response.data as Post;
};

export const createPost = async (content: string): Promise<Post> => {
    const response = await axios.post(`${API_BASE_URL}/api/posts`, { content });
    // Assert the response data as Post
    return response.data as Post;
};

