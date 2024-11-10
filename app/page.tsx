'use client'
import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/ui/mode-toggle'
 
export default function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
 
  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      })
      
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error:', error)
      setResponse('Error occurred while sending message');
    }
  }
 
  return (
    <main className="min-h-screen relative p-6">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-4">
          {response && <div className="text-center">{response}</div>}
          <Textarea placeholder="Type your name here." value={name} onChange={(e) => setName(e.target.value)} />
          <Textarea placeholder="Type your message here." value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button className="w-full" onClick={handleSubmit}>Send message</Button>
        </div>
      </div>
    </main>
  )
}
