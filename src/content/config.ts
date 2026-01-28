import { defineCollection, z } from "astro:content";

// Custom date parser that treats dates as local time, not UTC
const localDate = z.string().transform((str) => {
  const parts = str.split('-');
  if (parts.length !== 3) {
    throw new Error(`Invalid date format: ${str}`);
  }
  const [year, month, day] = parts.map(Number);
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error(`Invalid date format: ${str}`);
  }
  return new Date(year, month - 1, day);
});

// Parser for dateEnd that can be either a date or a string like "Current"
const dateOrString = z.string().transform((str) => {
  // If it matches date format YYYY-MM-DD, parse as local date
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    const [year, month, day] = str.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  // Otherwise return as string (e.g., "Current")
  return str;
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: localDate,
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: localDate,
    dateEnd: dateOrString,
    parentCompany: z.string().optional(),
  }),
});

const workPt = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: localDate,
    dateEnd: dateOrString,
    parentCompany: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: localDate,
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

export const collections = { blog, work, "work-pt": workPt, projects };
