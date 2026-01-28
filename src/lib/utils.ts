import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string, locale: string = "en"): string {
  const localeCode = locale === "pt" ? "pt-BR" : "en-US";
  const currentLabel = locale === "pt" ? "Atual" : "Current";
  
  const startMonth = startDate.toLocaleString(localeCode, { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      // Handle "Current" string
      endMonth = "";
      endYear = endDate === "Current" ? currentLabel : endDate;
    } else {
      endMonth = endDate.toLocaleString(localeCode, { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth} ${startYear} - ${endMonth}${endMonth ? " " : ""}${endYear}`;
}