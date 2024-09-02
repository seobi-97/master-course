import React from "react";
import { getPosts } from "../lib/get-post";

const session = null;

const Post = async () => {
  const posts = await getPosts();

  if (session == null) {
    throw new Error("no session provided");
  }
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-2">
            By {post.author} | {post.date}
          </p>
          <p className="mb-4">{post.content}</p>
          <div className="bg-gray-100 p-2 rounded">
            {post.comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <p className="text-gray-600 mb-1">{comment.author}</p>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
