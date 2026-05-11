import Link from 'next/link'


export default async function UserDetails({params}) {
    const {id} = await params

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const users = await response.json()

    return(
        <div className="p-10">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
                <h1 className="text-white text-2xl font-bold">{users.name}</h1>
            </div>

            <div className="p-6">
                <p><strong>Username:</strong>{users.username}</p>
                <p><strong>Email:</strong>{users.email}</p>
                <p><strong>Phone:</strong>{users.phone}</p>
                <p><strong>Website:</strong>{users.website}</p>
                <p className="mt-4"><strong>Company:</strong>{users.company.name}</p>
            </div>
            
            <Link 
                href="/users"
                className='bg-blue-400 px-4 py-2 rounded-md hover:cursor hover:bg-blue-500 shadow-md'
                >Go back</Link>

        </div>
    )
}