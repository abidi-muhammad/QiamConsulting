import { Link } from "react-router-dom"
// resources/js/Components/Breadcrumb.jsx

import { ChevronRight } from 'lucide-react';


export interface BreadcrumbItem {
  label: string;
  href: string | null;
}
const Breadcrumb = ({ breadcrumb_page_title = "", items }: { breadcrumb_page_title?: string, items: BreadcrumbItem[] }) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center py-6  '>
      <div>
        <h2 className='text-3xl'>{breadcrumb_page_title}</h2>
      </div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className={`inline-flex items-center text-sm font-medium ${index === items.length - 1
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                    }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`text-sm font-medium ${index === items.length - 1
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400'
                    }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
