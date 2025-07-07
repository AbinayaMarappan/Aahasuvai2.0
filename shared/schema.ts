import { z } from "zod";

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Product schemas (for future use)
export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  image: z.string().url(),
  inStock: z.boolean().default(true)
});
export type Product = z.infer<typeof productSchema>;