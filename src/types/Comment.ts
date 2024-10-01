export interface PostComment {
    id: number;
    content: string;
    timestamp: string;
  }
  
  export interface Post {
    id: number;
    content: string;
    timestamp: string;
    likes: number;  
    comments: PostComment[];  
  }
  