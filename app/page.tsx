'use client'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { NewUserForm } from '@/components/forms/new-user-form'
import { useEffect, useState } from 'react'
import { LogOutButton } from '@/components/ui/log-out-button'

export default function Home() {
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/.auth/me');
          if (!response.ok) {
            throw new Error('Failed to fetch user info');
          }
        const data = await response.json();
        setUser(data.clientPrincipal.userDetails);
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    }
    fetchUser();
  }, []);

  return (
    <main>
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <div className="absolute top-6 left-6">
        <LogOutButton user={user} />
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
