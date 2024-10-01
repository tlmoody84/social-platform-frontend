import { Post } from '@/types/Post';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:4001'; 

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch(`${API_BASE_URL}/api/posts`); 
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json(); 
};

export const getPostById = async (id: number) => {
    const response = await axios.get(`${API_BASE_URL}/api/posts/${id}`);
    return response.data;
};

export const createPost = async (content: string) => {
    const response = await axios.post(`${API_BASE_URL}/api/posts`, { content });
    return response.data;
};
