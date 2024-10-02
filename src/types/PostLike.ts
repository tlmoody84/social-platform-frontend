export interface User {
    id: number;
    username: string;
}

export interface PostLike {
    id: number;       
    user: User;       
    postId: number;   
    timestamp: string;
}
