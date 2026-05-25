import React from "react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "This is the content of blog post 1",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content: "This is the content of blog post 2",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content: "This is the content of blog post 3",
    },
  ];

  return (
    <main className="mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">Read our Blog post </h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4 ">
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
