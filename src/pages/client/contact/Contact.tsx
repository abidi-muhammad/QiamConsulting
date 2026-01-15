import { useState, FormEvent, ChangeEvent } from 'react'
import AppLayout from '../../layouts/AppLayout'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [processing, setProcessing] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' }
  ]

  const handleChange = (field: keyof ContactFormData) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    
    // Basic validation
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.message) newErrors.message = 'Message is required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setProcessing(false)
      return
    }
    
    try {
      // Your API call here
      console.log('Submitting:', formData)
      // await axios.post('/api/contact', formData)
      
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    } catch (error) {
      setStatus('Error sending message')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <AppLayout breadcrumbs={breadcrumbItems}>
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Get in touch with us</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange('name')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange('message')}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {processing ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <div className={`p-4 rounded-md ${status.includes('Error') ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400' : 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </AppLayout>
  )
}
