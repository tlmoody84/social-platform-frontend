// src/types/PostLike.ts

export interface User {
    id: number;
    username: string;
}

export interface PostLike {
    id: number;        // Unique identifier for the like
    user: User;       // The user who liked the post
    postId: number;   // ID of the post that was liked
    timestamp: string; // Time when the like was made
}
