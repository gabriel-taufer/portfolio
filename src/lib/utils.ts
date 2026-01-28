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

// Group work entries by company and calculate date ranges
export function groupWorkByCompany<T extends { data: { company: string; dateStart: Date; dateEnd: Date | string } }>(
  work: T[]
): Array<{
  company: string;
  roles: T[];
  dateStart: Date;
  dateEnd: Date | string;
  hasMultipleRoles: boolean;
}> {
  const grouped = work.reduce((acc, entry) => {
    const companyName = entry.data.company;
    if (!acc[companyName]) {
      acc[companyName] = [];
    }
    acc[companyName].push(entry);
    return acc;
  }, {} as Record<string, T[]>);

  return Object.entries(grouped)
    .map(([company, roles]) => {
      const sortedRoles = roles.sort((a, b) =>
        new Date(b.data.dateStart).valueOf() - new Date(a.data.dateStart).valueOf()
      );

      const earliestStart = roles.reduce((earliest, role) => {
        const roleStart = new Date(role.data.dateStart);
        return roleStart < earliest ? roleStart : earliest;
      }, new Date(roles[0].data.dateStart));

      const latestEnd = roles.reduce((latest, role) => {
        if (role.data.dateEnd === "Current") return new Date();
        const roleEnd = new Date(role.data.dateEnd);
        return roleEnd > latest ? roleEnd : latest;
      }, roles[0].data.dateEnd === "Current" ? new Date() : new Date(roles[0].data.dateEnd));

      return {
        company,
        roles: sortedRoles,
        dateStart: earliestStart,
        dateEnd: roles.some(r => r.data.dateEnd === "Current") ? "Current" : latestEnd,
        hasMultipleRoles: roles.length > 1
      };
    })
    .sort((a, b) => new Date(b.dateStart).valueOf() - new Date(a.dateStart).valueOf());
}