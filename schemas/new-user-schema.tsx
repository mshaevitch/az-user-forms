import { z } from "zod"

export const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    department: z.string({
        required_error: "Department is required.",
    }),
    startDate: z.date({
        required_error: "A start date is required.",
    }),
    notes: z.string().max(360, {
        message: "Max 300 characters.",
    }),
})

export type NewUserType = z.infer<typeof formSchema>
