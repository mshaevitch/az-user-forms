'use client'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { NewUserForm } from '@/components/forms/new-user-form'

export default function Home() {
  return (
    <main>
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      {/* {response && (
        <div className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-gray-800 rounded border border-gray-700">
          <h2 className="font-medium mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )} */}
      <NewUserForm />
    </main>
  )
}
