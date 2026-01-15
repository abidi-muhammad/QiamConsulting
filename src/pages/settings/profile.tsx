import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import DeleteUser from '@/components/delete-user'
import HeadingSmall from '@/components/heading-small'
import InputError from '@/components/input-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppLayout from '@/layouts/app-layout'
import SettingsLayout from '@/layouts/settings/layout'

interface BreadcrumbItem {
  label: string
  href: string
}

interface User {
  name: string
  email: string
}

export default function Profile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [status, setStatus] = useState<string | null>(null)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log({ name, email })
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Settings', href: '/settings' },
    { label: 'Profile', href: '/settings/profile' },
  ]

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <SettingsLayout>
        <div className="space-y-6">
          <div>
            <HeadingSmall
              title="Profile Information"
              description="Update your account's profile information and email address."
            />
          </div>

          <form onSubmit={submit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full"
                  required
                />
                <InputError message={errors.name} className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full"
                  required
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit">Save</Button>

              <Transition
                show={!!status}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
              >
                <p className="text-sm text-gray-600">{status}</p>
              </Transition>
            </div>
          </form>

          <DeleteUser />
        </div>
      </SettingsLayout>
    </AppLayout>
  )
}
