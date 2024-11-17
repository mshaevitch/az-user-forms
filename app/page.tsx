import { ModeToggle } from '@/components/ui/mode-toggle'
import { NewUserForm } from '@/components/forms/new-user-form'
import LogOutButton from '@/components/log-out-button'

export default function Home() {
  return (
    <main>
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <div className="absolute top-6 left-6">
        <LogOutButton />
      </div>
      <NewUserForm />
    </main>
  )
}
