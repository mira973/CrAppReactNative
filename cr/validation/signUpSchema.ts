import { z } from 'zod'

export const signUpShema = z.object({
    username: z.string().min(3, 'Минимальное количество символов 3'),
    email: z.string().email('Некорректный формат email'),
    password: z.string().min(6, 'Минимальное количество символов  6'),
    confirmPassword: z.string().min(1, 'Повторите пароль')
})

.refine((data)=>   data.password === data.confirmPassword,{
 message: 'Пароли не совпадают',
    path: ['confirmPassword'],
})

export type SignUpFormData = z.infer<typeof signUpShema>;