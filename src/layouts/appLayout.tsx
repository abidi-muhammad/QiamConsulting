import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  href: string | null
}

interface AppLayoutProps {
  children: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  breadcrumbStatus?: boolean
}

export default function AppLayout({ children, breadcrumbs, breadcrumbStatus = true }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white">Cloud Solutions</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
                Services
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
                Contact
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {breadcrumbStatus && breadcrumbs && breadcrumbs.length > 0 && (
        <div className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.href ? (
                      <Link to={item.href} className="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      )}
      
      <main>
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Cloud Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
