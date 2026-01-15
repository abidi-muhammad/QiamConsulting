import { useState, ChangeEvent, FormEvent } from 'react'

interface UseFormOptions<T> {
  initialData: T
  onSubmit?: (data: T) => void | Promise<void>
}

export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {
  const [data, setData] = useState<T>(options.initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [processing, setProcessing] = useState(false)

  const handleChange = (field: keyof T) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const setValue = (field: keyof T, value: any) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const reset = (...fields: (keyof T)[]) => {
    if (fields.length === 0) {
      setData(options.initialData)
    } else {
      const newData = { ...data }
      fields.forEach(field => {
        newData[field] = options.initialData[field]
      })
      setData(newData)
    }
  }

  const submit = async (e?: FormEvent) => {
    if (e) e.preventDefault()
    setProcessing(true)
    try {
      if (options.onSubmit) {
        await options.onSubmit(data)
      }
    } finally {
      setProcessing(false)
    }
  }

  return {
    data,
    setData,
    errors,
    setErrors,
    processing,
    setProcessing,
    handleChange,
    setValue,
    reset,
    submit,
  }
}
