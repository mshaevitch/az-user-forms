import { UseFormReturn } from 'react-hook-form'
import { NewUserType } from '@/schemas/new-user-schema'
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

interface NotesFieldProps {
    form: UseFormReturn<NewUserType>
}

export function NotesField({ form }:  NotesFieldProps) {
    return (
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
    )
}
