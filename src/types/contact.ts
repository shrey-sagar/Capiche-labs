import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email"),

  phone: z
    .string()
    .min(7, "Phone number is required"),

  company: z.string().optional(),

  service: z
    .string()
    .min(1, "Please select a service"),

  budget: z.string().optional(),

  timeline: z.string().optional(),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters"),

  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;