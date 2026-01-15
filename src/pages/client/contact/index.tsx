import { useState, FormEvent } from 'react'
import { useForm } from '@/hooks/useForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import InputError from '@/components/input-error'

interface ContactForm {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null)
  
  const { data, handleChange, errors, setErrors, processing, submit } = useForm<ContactForm>({
    initialData: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async (formData) => {
      console.log('Form submitted:', formData)
      // Add your API call here
      // Example: await axios.post('/api/contact', formData)
      setStatus('Message sent successfully!')
      setTimeout(() => setStatus(null), 3000)
    }
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await submit()
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
            value={data.name}
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
            value={data.email}
            onChange={handleChange('email')}
            className="mt-1"
          />
          <InputError message={errors.email} />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={data.message}
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
          <div className="p-4 bg-green-50 text-green-700 rounded">
            {status}
          </div>
        )}
      </form>
    </div>
  )
}
