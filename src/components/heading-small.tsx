interface HeadingSmallProps {
  title: string
  description: string
}

export default function HeadingSmall({ title, description }: HeadingSmallProps) {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  )
}
