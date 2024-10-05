import { z } from 'zod';

export const FormDataSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  dob: z.string().refine((val) => {
    const date = new Date(val);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    const dayDiff = today.getDate() - date.getDate();
    const isAtLeast18 =
      age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
    return !isNaN(date.getTime()) && isAtLeast18;
  }, 'You must be at least 18 years old'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  country: z.string().min(2, 'Country is required'),
  street: z.string().min(4, 'Street is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zip: z.string().min(5, 'Zip must be at least 5 characters')
});

export type Inputs = z.infer<typeof FormDataSchema>;
