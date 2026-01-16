import { ReactNode } from 'react';

interface AuthLayoutTemplateProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const AuthLayoutTemplate = ({ children, title, description, ...props }: AuthLayoutTemplateProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950" {...props}>
      <div className="w-full max-w-md p-8">
        {title && <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h1>}
        {description && <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default AuthLayoutTemplate;