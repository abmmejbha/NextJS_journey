// এটি একটি Server Component, তাই এখানে সরাসরি async ব্যবহার করা যায়
export default async function UsersPage() {
  // ১. ডেটা ফেচ করা
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">User List (Fetched from Server)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm hover:bg-gray-50">
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}