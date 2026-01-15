import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import InputError from '@/components/input-error'


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
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">Get in touch with us</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange('name')}
              className="mt-1"
            />
            <InputError message={errors.name} />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              className="mt-1"
            />
            <InputError message={errors.email} />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange('message')}
              className="mt-1"
              rows={4}
            />
            <InputError message={errors.message} />
          </div>

          <Button type="submit" disabled={processing}>
            {processing ? 'Sending...' : 'Send Message'}
          </Button>

          {status && (
            <div className={`p-4 rounded ${status.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
  )
}