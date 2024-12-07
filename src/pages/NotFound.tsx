
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">
                404 Page Not Found
            </h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/" className="text-primary">
                Go back to Home
            </a>
        </div>
    )
}

export default NotFound