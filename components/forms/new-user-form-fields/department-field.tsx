import { UseFormReturn } from 'react-hook-form'
import { NewUserType } from '@/schemas/new-user-schema'
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface DepartmentFieldProps {
    form: UseFormReturn<NewUserType>
}

export function DepartmentField({ form }:  DepartmentFieldProps) {
    return (
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
    )
}
