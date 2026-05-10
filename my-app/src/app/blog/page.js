export default function blog() {
  const posts =[
    {id: 1, title: "Blog Post 1", content: "This is the content of blog post 1"},
    {id: 2, title: "Blog Post 2", content: "This is the content of blog post 2"},
    {id: 3, title: "Blog Post 3", content: "This is the content of blog post 3"},
  ]

  return (
    <main className="mt-10">
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">{post.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}