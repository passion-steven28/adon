const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">
                            About
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
