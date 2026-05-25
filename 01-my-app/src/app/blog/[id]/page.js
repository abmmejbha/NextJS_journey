import react from 'react';

export default async function BlogPost({params}) {
    const {id} = await params

    const posts = [
        { id: 1, title: "Blog Post 1", content: "This is the content of blog post 1" },
        { id: 2, title: "Blog Post 2", content: "This is the content of blog post 2" },
        { id: 3, title: "Blog Post 3", content: "This is the content of blog post 3" },
    ]

    const post = posts.find((p) => p.id === parseInt(id))

    if(!post) {
        return (
            <div className="p-10 bg-red-500 text-white">Post not found</div>
        )
    }
    
    return(
        <main>
            <div className="min-h-screen bg-gray-200 rounded shadow"> 
                    <h1 className="text-2xl shadow-lg items-center font-bold mb-4 text-cyan-500">{post.title}</h1>
                    <p className="text-lg text-gray-700">{post.content}</p>
            </div>
        </main>
    )
}