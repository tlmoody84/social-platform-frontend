import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/posts';
import { Post as PostType } from '../types/Post';
import Link from 'next/link';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data); 
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">All Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold">{post.content}</h2>
          <p className="text-gray-600">Likes: {post.likes}</p>
          
          <h3 className="mt-2 text-lg font-semibold">Comments:</h3>
          {Array.isArray(post.comments) && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="ml-4 border-l-2 border-gray-300 pl-2 mb-2">
                <p className="text-gray-800">{comment.content}</p>
                <p className="text-gray-500 text-sm">{comment.timestamp}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
          
          <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
            View Post
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;