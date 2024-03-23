import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().min(1, { message: 'Username tidak boleh kosong' }),
  password: z.string().min(1, { message: 'Password tidak boleh kosong' }),
});

export const registerFormSchema = z.object({
  username: z.string().min(1, { message: 'Username tidak boleh kosong' }),
  name: z.string().min(1, { message: 'Nama Lengkap tidak boleh kosong' }),
  password: z.string().min(1, { message: 'Password tidak boleh kosong' }),
});

export const profileFormSchema = z.object({
  username: z.string().min(0, { message: 'Username tidak boleh kosong' }),
  name: z.string().min(1, { message: 'Name Lengkap tidak boleh kosong' }),
});
