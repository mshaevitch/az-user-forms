'use client'
import { useState } from 'react'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  department: z.string({
    required_error: "Department is required.",
  }),
  notes: z.string().max(360, {
    message: "Max 300 characters.",
  }),
})

export default function Home() {
  const [response, setResponse] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      notes: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // const name = values.username
    // const message = values.msg
    // try {
    //   const res = await fetch('/api/hello', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, message }),
    //   })
      
    //   const data = await res.json();
    //   setResponse(data.message);
    // } catch (error) {
    //   console.error('Error:', error)
    //   setResponse('Error occurred while sending message');
    // }
  }
 
  return (
    <main>
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      {response && (
        <div className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-gray-800 rounded border border-gray-700">
          <h2 className="font-medium mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
      <div className="flex min-h-screen items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-96">
            <div className='flex justify-between'>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter additional notes"
                      className="h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}
