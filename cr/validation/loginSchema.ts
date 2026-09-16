import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Некорректный формат email'),
    password: z.string().min(6, 'Минимальное количество символов 6'),
});

export type LoginFormData = z.infer<typeof loginSchema>;