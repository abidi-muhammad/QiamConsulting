#!/bin/bash
cd /d/Projects_2025/react-app

echo "=== Converting Inertia.js files to React Router ==="

# 1. Create helper function files
mkdir -p src/hooks

# Create useForm hook replacement
cat > src/hooks/useForm.ts << 'EOF'
import { useState, ChangeEvent } from 'react'

export function useForm<T extends Record<string, any>>(initialData: T) {
  const [data, setData] = useState<T>(initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [processing, setProcessing] = useState(false)

  const handleChange = (field: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const setValue = (field: keyof T, value: any) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const reset = (...fields: (keyof T)[]) => {
    if (fields.length === 0) {
      setData(initialData)
    } else {
      const newData = { ...data }
      fields.forEach(field => {
        newData[field] = initialData[field]
      })
      setData(newData)
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
  }
}
