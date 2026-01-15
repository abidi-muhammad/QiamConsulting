import { Link } from 'react-router-dom'

interface TextLinkProps {
  to: string
  children: React.ReactNode
  className?: string
  tabIndex?: number
}

export default function TextLink({ to, children, className = '', tabIndex }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={`text-blue-600 hover:text-blue-800 hover:underline ${className}`}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  )
}
