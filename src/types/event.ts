import { z } from 'zod';

export const EventSchema = z.object({
    name: z.string(),
    description: z.string(),
    date: z.string(),
    amount: z.number(),
    type: z.enum(['income', 'expense']),
    attachment: z.string(),
});

export type EventType = z.infer<typeof EventSchema>;
