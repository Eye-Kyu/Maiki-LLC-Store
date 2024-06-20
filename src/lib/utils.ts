import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


// This cn ensures that you can add classnames together dynamically and use them over and over again
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
