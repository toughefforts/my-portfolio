import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility helper combining clsx conditional class joining with tailwind-merge
 * deduplication, ensuring conflicting utility classes are cleanly resolved.
 *
 * @param inputs Conditional class values, arrays, strings, or object maps.
 * @returns Combined, sanitized, conflict-free className string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
