import { GetServerSideProps } from 'next';
import { getPostById } from '../api/posts';
import { Post as PostType } from '../types/Post';

type PostPageProps = {
  post: PostType;
};

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.content}</h1>
      <p>Likes: {post.likes}</p>
      
      <h2>Comments:</h2>
      {Array.isArray(post.comments) ? (
        post.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <p>{comment.timestamp}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  try {
    const post = await getPostById(parseInt(id));
    return { props: { post } };
  } catch {
    return {
      notFound: true,  
    };
  }
};

export default PostPage;
