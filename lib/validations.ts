import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().min(1, { message: 'Username tidak boleh kosong' }),
  password: z.string().min(1, { message: 'Password tidak boleh kosong' }),
});

export const registerFormSchema = z.object({
  username: z.string().min(1, { message: 'Username tidak boleh kosong' }),
  name: z.string().min(1, { message: 'Name tidak boleh kosong' }),
  password: z.string().min(1, { message: 'Password tidak boleh kosong' }),
});
