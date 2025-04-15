import React from 'react'
import { FormControl, FormDescription, FormField as UIFormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control, Controller, FieldValue, FieldValues, Path } from 'react-hook-form'

type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';
};

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = '',
  type = 'text',
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className='input' {...field} type={type} placeholder={placeholder} />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
  />
);



export default FormField