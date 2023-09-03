import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const twsx = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs))
}