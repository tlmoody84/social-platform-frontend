import React, { useState } from 'react';
import { createPost } from '@/api/posts';
import { useRouter } from 'next/router';

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(content);
    router.push('/');  
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
