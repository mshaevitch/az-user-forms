'use client'
import { useState } from 'react'
 
export default function Home() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      })
      
      const data = await res.json()
      setResponse(data.message)
    } catch (error) {
      console.error('Error:', error)
      setResponse('Error occurred while sending message')
    } finally {
      setIsLoading(false)
    }
  }
 
  return (
    <main className="min-h-screen p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">API Example</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded bg-transparent text-white border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded bg-transparent text-white border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      {response && (
        <div className="mt-8 p-4 bg-gray-800 rounded border border-gray-700">
          <h2 className="font-medium mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </main>
  )
}
