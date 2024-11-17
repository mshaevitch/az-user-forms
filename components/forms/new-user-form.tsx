'use client'
import { Button } from "@/components/ui/button"
import { Form } from '@/components/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, NewUserType } from "@/schemas/new-user-schema"
import { NameFields } from "./new-user-form-fields/name-fields"
import { DepartmentField } from "./new-user-form-fields/department-field"
import { StartDateField } from "./new-user-form-fields/start-date-field"
import { NotesField } from "./new-user-form-fields/notes-field"
import { useState } from "react"

export function NewUserForm() {

  const [userInfo, setUserInfo] = useState('');

  const form = useForm<NewUserType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      notes: "",
    },
  })

  async function onSubmit(values: NewUserType) {
    setUserInfo(JSON.stringify(values));
  }

  return (
      <div className="flex min-h-screen items-center justify-center">
        {userInfo && (<div>{userInfo}</div>)}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-96">
            <NameFields form={form} />
            <DepartmentField form={form} />
            <StartDateField form={form} />
            <NotesField form={form} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
  )
}
