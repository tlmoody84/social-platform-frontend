// src/types/Post.ts
export interface Comment {
    id: number;
    content: string;
    timestamp: string;
  }
  
  export interface Post {
    id: number;
    content: string;
    likes: number;
    comments: Comment[];
  }
  