import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-50 p-6 text-gray-900 lg:justify-center lg:p-8 dark:bg-gray-900 dark:text-white">
            <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
                <nav className="flex items-center justify-end gap-4">
                    <Link
                        to="/login"
                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-gray-900 hover:border-gray-300 dark:text-gray-100 dark:hover:border-gray-600"
                    >
                        Log in
                    </Link>
                    <Link
                        to="/register"
                        className="inline-block rounded-sm border border-gray-300 px-5 py-1.5 text-sm leading-normal text-gray-900 hover:border-gray-400 dark:border-gray-600 dark:text-gray-100 dark:hover:border-gray-500"
                    >
                        Register
                    </Link>
                </nav>
            </header>
            
            <div className="flex w-full items-center justify-center">
                <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row gap-6">
                    <div className="flex-1 rounded-lg bg-white p-6 pb-12 text-sm leading-relaxed shadow-sm border border-gray-200 lg:p-12 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
                        <h1 className="mb-4 text-2xl font-bold">Welcome to Your React App</h1>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            This is a modern React application with cloud infrastructure consultation services.
                        </p>
                        <ul className="mb-8 space-y-4">
                            <li className="flex items-start gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-medium mb-1">Explore Services</p>
                                    <Link
                                        to="/services"
                                        className="text-blue-600 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        View our cloud consultation services
                                    </Link>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-medium mb-1">Learn About Us</p>
                                    <Link
                                        to="/about"
                                        className="text-blue-600 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        Discover our expertise
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="flex gap-3">
                            <Link
                                to="/"
                                className="inline-block rounded-md border border-gray-900 bg-gray-900 px-6 py-2.5 text-sm font-medium leading-normal text-white hover:bg-gray-800 transition-colors dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                            >
                                Visit Homepage
                            </Link>
                        </div>
                    </div>
                    
                    <div className="relative w-full shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 p-12 lg:w-[438px] border border-gray-200 dark:from-blue-900/30 dark:to-cyan-900/30 dark:border-gray-700">
                        <div className="flex h-full items-center justify-center">
                            <div className="text-center">
                                <div className="mb-6 text-7xl">☁️</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-3 dark:text-white">
                                    Cloud Infrastructure
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Expert Consultation Services
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
