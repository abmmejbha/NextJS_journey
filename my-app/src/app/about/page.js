export default async function Page() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const jsonData = await data.json()
    return (
        <div>
            <h1>About Us</h1>
            <p>{jsonData.title}</p>
        </div>
    )
}