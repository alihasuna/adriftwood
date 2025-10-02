'use client'

import { useState } from 'react'
import { Button } from './button'
import { Input } from './input'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0 border-b-2 border-brand-bronze/30 hover:border-brand-bronze transition-colors duration-300">
      <Input
        type="email"
        placeholder="YOUR EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading' || status === 'success'}
        className="flex-1 bg-transparent border-none text-neutral-50 placeholder:text-brand-bronze/50 focus:ring-0 focus:outline-none px-0 text-sm tracking-wide font-body"
      />
      <Button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        variant="ghost"
        className="bronze-shimmer text-brand-bronze hover:text-brand-bronze-light hover:bg-transparent px-6 text-sm tracking-wider font-medium font-body transition-colors"
      >
        {status === 'loading' ? 'SENDING...' : status === 'success' ? 'SENT!' : 'SUBSCRIBE'}
      </Button>
    </form>
  )
}