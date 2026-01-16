import { ReactNode } from 'react';
import { type BreadcrumbItem } from '@/types';

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

const AppLayout = ({ children, breadcrumbs }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                      {crumb.title}
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">{crumb.title}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
      {children}
    </div>
  );
};

export default AppLayout;