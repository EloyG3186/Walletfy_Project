import z from 'zod';

export const ThemeSchema = z.object({
  theme: z.enum(['light', 'dark']),
});

export type Theme = z.infer<typeof ThemeSchema>;