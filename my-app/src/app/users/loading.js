export default function loading() {
    return (
        <div className="felx items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 ">
                <h2 className="ml-4 text-semibold">Loading users...</h2>
            </div>
        </div>
    )
}